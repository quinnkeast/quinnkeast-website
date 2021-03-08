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
          <h1 className="mb-8 text-5xl">
            Quinn Keast is a user experience & product designer. He solves
            interesting problems by putting people first—from product vision to
            the last 5%.
          </h1>
          <h2 className="text-2xl font-normal tracking-snug">
            Partner & designer at{" "}
            <a href="https://caribou.co" target="_blank">
              Caribou
            </a>
            . Also product designer at{" "}
            <a href="https://sourcegraph.com" target="_blank">
              Sourcegraph
            </a>
            .
          </h2>
          <div className="grid md:grid-cols-3 mt-8">
            <div className="col-1">
              <p>
                <strong>Current location</strong>
                <br />
                Berlin, Germany
              </p>
            </div>
            <div className="col-1">
              <p>
                <strong>Say hello</strong>
                <br />
                <a href="mailto:hello@quinnkeast.com">hello@quinnkeast.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
