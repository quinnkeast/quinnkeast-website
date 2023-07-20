import Head from "next/head";
import Layout from "../components/layout";

function Impressum() {
  return (
    <Layout pageName="Impressum">
      <div className="grid md:grid-cols-5">
        <div className="col-span-3 col-start-2 content">
          <h3>Quinn Keast-Wiatrowski</h3>
          <p>
            <a href="mailto:hey@quinnkeast.com">hey@quinnkeast.com</a>
            <br />
            Dieffenbachstrasse 58, 10967 Berlin
            <br />
            Tax Identification Number: 14/377/05054 VAT ID: DE330241562
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Impressum;
