import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR("/api/user");

  useEffect(() => {
    // if no redirect needed, just return
    // if user data not there then don't do anything yet
    if (!redirectTo && !user) return;

    // If redirectTo is set, redirect if the user was not found.
    if (redirectTo && !user?.isLoggedIn) {
      Router.replace(redirectTo);
    }

    // If redirectIfFound is also set, redirect if the user was found
    if (redirectIfFound && user?.isLoggedIn) {
      Router.push(redirectIfFound);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
