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
            Leading design at{" "}
            <a href="https://dittowords.com" target="_blank">
              Ditto
            </a>{" "}
            <a href="https://www.dittowords.com/careers/product-designer?utm_source=quinnkeast.com" target="_blank" className="border-0 px-1.5 py-0 bg-black text-tan rounded-md hover:rounded-md inline-block text-sm">
              We’re hiring!
            </a>. Also writing{" "}
            <a href="/brand-book">a book on brand for product teams</a>.
          </h2>
          <div className="grid md:grid-cols-3 mt-2 md:mt-4">
            <div className="col-1">
              <p>
                <strong>Currently based in</strong>
                <br />
                Montréal
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
