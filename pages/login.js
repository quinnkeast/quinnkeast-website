import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";

function Login() {
  const { query } = useRouter();

  // check if already logged in and redirect if so
  const { mutateUser } = useUser({
    redirectIfUserFound: query.ref ? `/projects/${query.ref}` : "/projects",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [passwordFieldValue, setPasswordFieldValue] = useState("");

  const handleChange = (e) => {
    setPasswordFieldValue(e.target.value);
  };

  return (
    <Layout pageName="Protected Content">
      <div className="grid md:grid-cols-3">
        <div className="col-span-2 col-start-2">
          <h1 className="text-2xl md:text-4xl">Protected content</h1>
          <p className="text-base">
            In line with privacy agreements and client confidentiality, access
            to project case studies is available on a limited basis.
          </p>
          <form
            className="mt-4 mb-8"
            onSubmit={async function handleSubmit(event) {
              event.preventDefault();

              const body = {
                password: passwordFieldValue,
              };

              const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });

              if (response.ok) {
                try {
                  // if the server replies, there's some data in json
                  // if a network error, will throw at previous line
                  const data = await response.json();
                  mutateUser(data);
                } catch (error) {
                  console.error("An unexpected error happened:", error);
                }
              } else {
                setErrorMsg("Incorrect password");
              }
            }}
          >
            <label className="block mb-3 font-bold">
              Enter password to access content
              <input
                type="password"
                name="password"
                required
                className="w-1/2 block text-base rounded-md px-2 py-1 border-2 border-black mt-2 bg-transparent focus:bg-white"
                value={passwordFieldValue}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="bg-black text-white rounded py-1 px-3 text-sm"
            >
              Submit
            </button>
            {errorMsg && <p>{errorMsg}</p>}
            <p className="text-sm mt-4">
              Interested in reading case studies? Please{" "}
              <a href="mailto:hey@quinnkeast.com">contact me</a> for more
              information.
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
