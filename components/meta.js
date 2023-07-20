import Head from "next/head";
//import Script from "next/script";

import { HOME_OG_IMAGE_URL, SITE_NAME } from "../lib/constants";

export default function Meta({ pageName }) {
  const pageTitle = `${pageName} | ${SITE_NAME}`;

  return (
    <Head>
      <script
        src="https://stirring-ziggy-stardust.quinnkeast.com/script.js"
        site={process.env.FATHOM}
        defer
      ></script>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} key="title" />
      <meta
        property="og:description"
        content="Quinn Keast is a user experience & product designer. He solves interesting problems by putting people first—from product vision to the last 5%."
        key="description"
      />
      <meta property="og:title" content={SITE_NAME} key="title" />
      <meta property="og:url" content="https://quinnkeast.com/" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="image" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@quinnkeast" />
      <meta property="twitter:creator" content="@quinnkeast" />
      <meta property="twitter:title" content={SITE_NAME} key="twitter-title" />
      <meta
        property="twitter:description"
        content="Quinn Keast is a user experience & product designer. He solves interesting problems by putting people first—from product vision to the last 5%."
        key="twitter-description"
      />
      <meta
        property="twitter:image"
        content={HOME_OG_IMAGE_URL}
        key="twitter-image"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
