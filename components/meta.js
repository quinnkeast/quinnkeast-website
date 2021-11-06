import Head from "next/head";
import { HOME_OG_IMAGE_URL, SITE_URL, SITE_NAME } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <script
        src="https://cdn.usefathom.com/script.js"
        site={process.env.FATHOM}
        defer
      ></script>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>{SITE_NAME}</title>
      <meta
        property="og:description"
        content="Quinn Keast is a user experience & product designer. He solves interesting problems by putting people first—from product vision to the last 5%."
        key="description"
      />
      <meta property="og:title" content={SITE_NAME} key="title" />
      <meta property="og:url" content="https://quinnkeast.com/" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta
        property="og:image"
        content={`${SITE_URL}${HOME_OG_IMAGE_URL}`}
        key="image"
      />
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
        content={`${SITE_URL}${HOME_OG_IMAGE_URL}`}
        key="twitter-image"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
