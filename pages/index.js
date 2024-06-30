import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Quinn Keast</title>
      </Head>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="mb-4 md:mb-8 text-2xl md:text-5xl leading-none md:leading-none">
            Quinn Keast is a user experience & product designer. He solves
            interesting problems by putting people first—from product vision to
            the last 5%.
          </h1>
          <h2 className="text-base md:text-lg font-normal tracking-snug leading-tight md:leading-tight">
            Founding product designer at{" "}
            <a href="https://dittowords.com" target="_blank">
              Ditto
            </a>
            . Partner at{" "}
            <a href="https://caribou.co" target="_blank">
              Caribou
            </a>
            . Also writing{" "}
            <a href="/brand-book">a book on brand for product teams</a>.
          </h2>
          <div className="grid md:grid-cols-3 mt-2 md:mt-4">
            <div className="col-1">
              <p>
                <strong>Currently based in</strong>
                <br />
                Berlin
              </p>
            </div>
            <div className="col-1">
              <p>
                <strong>Say hello</strong>
                <br />
                <a href="mailto:hey@quinnkeast.com">hey@quinnkeast.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
