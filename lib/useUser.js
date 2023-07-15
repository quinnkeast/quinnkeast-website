import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
  redirectTo = "",
  redirectIfUserFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR("/api/user");

  useEffect(() => {
    // if no redirect needed, just return
    // if user data not there then don't do anything yet
    if (!redirectTo && !user) return;

    // If redirectTo is set, redirect if the user was not found.
    // Use Router.replace instead of push to prevent redirect pages being put in the history stack
    if (redirectTo && !user?.isLoggedIn) {
      Router.replace(redirectTo);
    }

    // If redirectIfUserFound is also set, redirect if the user was found
    // Use Router.replace instead of push to prevent redirect pages being put in the history stack
    if (redirectIfUserFound && user?.isLoggedIn) {
      Router.replace(redirectIfUserFound);
    }
  }, [user, redirectIfUserFound, redirectTo]);

  return { user, mutateUser };
}
