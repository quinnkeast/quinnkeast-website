import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { User } from "../pages/api/user";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR("/api/user");

  useEffect(() => {
    // if no redirect needed, just return
    // if user data not there then don't do anything yet
    console.log("1");
    console.log(user);
    console.log(redirectTo);
    if (!redirectTo && !user) return;

    console.log("2");
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      console.log("4");
      Router.push(redirectTo);
    }
    console.log("5");
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
