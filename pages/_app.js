import "nprogress/nprogress.css";
import "../styles/globals.css";
import "../styles/github-dark.css";
import { SWRConfig } from "swr";
import fetchJson from "../lib/fetchJson";
import * as Fathom from "fathom-client";

import React, { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";

function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM, {
      includedDomains: ["quinnkeast.com"],
    });

    function trackingOnRouteChangeComplete() {
      Fathom.trackPageview();
    }

    Router.events.on("routeChangeComplete", trackingOnRouteChangeComplete);

    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    // Loading bar handling
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);

      Router.events.off("routeChangeComplete", trackingOnRouteChangeComplete);
    };
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default App;
