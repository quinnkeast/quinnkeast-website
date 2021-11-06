import Head from "next/head";
import { HOME_OG_IMAGE_URL, SITE_NAME } from "../lib/constants";

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
        content={`Quinn Keast is a user experience & product designer. He solves interesting problems by putting people first—from product vision to the last 5%.`}
        key="description"
      />
      <meta property="og:title" content={SITE_NAME} key="title" />
      <meta property="og:url" content="https://quinnkeast.com/" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
