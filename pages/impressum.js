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
          <h3>Quinn Keast-Wiatrowski</h3>
          <p>
            <a href="mailto:hey@quinnkeast.com">hey@quinnkeast.com</a>
            <br />
            Dieffenbachstrasse 58, 10967 Berlin
            <br />
            Tax Identification Number: 14/377/05054 VAT ID: DE330241562
          </p>
          <p className="text-xs text-black-lighter">
            This page exists because of{" "}
            <a
              href="https://law.stackexchange.com/questions/23307/to-whom-does-the-german-impressumspflicht-apply"
              target="_blank"
            >
              a dumb German law
            </a>{" "}
            so please don’t use for nefariousness or tomfoolery
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Impressum;
