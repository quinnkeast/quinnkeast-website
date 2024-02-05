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
          {/* <h2 className="text-base md:text-lg font-normal tracking-snug leading-tight md:leading-tight">
            Staff product designer. Open to new opportunities.
            Also partner at{" "}
            <a href="https://caribou.co" target="_blank">
              Caribou
            </a>
            .
          </h2>*/}
          <div className="grid md:grid-cols-3 mt-2 md:mt-4">
            <div className="col-1">
              <p>
                <span className="rounded inline-block bg-yellow bg-opacity-20 text-yellow-700 text-sm leading-snug pb-2px px-2 mb-1.5">
                  Open to opportunities
                </span>
              </p>
            </div>
            <div className="col-1">
              <p>
                <strong>Current location</strong>
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
