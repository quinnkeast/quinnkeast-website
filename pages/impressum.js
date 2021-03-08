import Head from "next/head";
import Layout from "../components/layout";

function Impressum() {
  return (
    <div>
      <Head>
        <title>Impessum | Quinn Keast</title>
      </Head>
      <h3>Quinn Keast-Wiatrowski</h3>
      <p>
        <a href="mailto:hello@quinnkeast.com">hello@quinnkeast.com</a>
        <br />
        Dieffenbachstrasse 58, 10967 Berlin
        <br />
        Tax Identification Number: 14/377/05054 VAT ID: DE330241562
      </p>
    </div>
  );
}

export default Impressum;
