import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";

function Impressum() {
  return (
    <Layout>
      <Head>
        <title>{`Impressum | ${SITE_NAME}`}</title>
      </Head>
      <div className="grid md:grid-cols-3 mt-8 md:mt-16 pt-4 md:pt-8">
        <div className="md:col-span-2 md:col-start-2 max-w-md content">
          <h1>Impressum</h1>
          <h3>Quinn Keast</h3>
          <p>
            <a href="mailto:hey@quinnkeast.com">hey@quinnkeast.com</a>
          </p>
          <p className="text-xs text-black-lighter">
            This page previously existed because of{" "}
            <a
              href="https://law.stackexchange.com/questions/23307/to-whom-does-the-german-impressumspflicht-apply"
              target="_blank"
            >
              a dumb German law
            </a>{" "}
            while I was living in Berlin, but now it’s just a nice easter egg.
            P.S. if you live in Germany, make sure your website has an
            impressum.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Impressum;
