import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <script
        src="https://cdn.usefathom.com/script.js"
        site={process.env.FATHOM}
        defer
      ></script>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="Quinn Keast"
        content={`Quinn Keast is a user experience & product designer. He solves interesting problems by putting people first—from product vision to the last 5%.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
