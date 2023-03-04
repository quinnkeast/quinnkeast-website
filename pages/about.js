import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";

function About() {
  return (
    <Layout>
      <Head>
        <title>Writing | {SITE_NAME}</title>
        <meta
          property="og:description"
          content={`I’m Quinn Keast, a user experience & product designer.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`About | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://quinnkeast.com/about"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">About</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          I’m Quinn Keast, a user experience & product designer.
        </p>
        <img
          src="/assets/quinn-portrait.jpg"
          className="w-72 mt-4 md:mt-8"
          alt="Portrait of Quinn Keast, the handsome devil"
        />
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">
            The nitty gritty
          </h2>
        </div>
        <div className="md:col-span-2 max-w-md">
          <p>
            I enjoy crafting new user experiences and working to make existing
            ones perform better. The processes and thinking involved in creating
            digital products through human-centred design are immensely
            satisfying.
          </p>

          <p>
            I have more than 13 years of expertise that covers the entire
            human-centred design process: from research and strategy to finished
            interface design and front-end development. My background is in
            design, which is complemented by a lifetime of tinkering with
            digital tools, languages, and technologies.
          </p>

          <p>
            In 2011, I co-founded{" "}
            <a href="https://caribou.co" target="_blank">
              Caribou
            </a>
            , a user experience strategy and design consultancy that works with
            product teams and organizations to make better products and
            experiences.
          </p>

          <p>
            Aside from all that, I’m a Canadian currently working out of Berlin,
            and I enjoy playing Ultimate frisbee, bouldering, writing, and
            baking macarons.
          </p>

          <p>
            Want to know about my guiding values and how I work as a human? I’ve
            created a <Link href="/readme">Quinn.ReadMe</Link> that acts as a
            user guide for me.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-12 pt-8">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">Timeline</h2>
        </div>
        <div className="md:col-span-2">
          <p>
            <strong>Airplane</strong> / Dev Infrastructure for Internal Tools
            <br />
            Product Design
            <br />
            2023 – Present
          </p>
          <p>
            <strong>Caribou</strong> / Strategy &amp; Design Consultancy
            <br />
            UX &amp; Product Designer, Partner
            <br />
            2011 – Present
          </p>
          <p>
            <strong>Sourcegraph</strong> / Universal Code Search & Intelligence
            Platform
            <br />
            Staff Product Designer
            <br />
            2022 – 2023
            <br />
            Senior Product Designer
            <br />
            2020 – 2022
          </p>
          <p>
            <strong>Marley Spoon</strong> / Meal Kit Service
            <br />
            UX Lead
            <br />
            2019 – 2020
            <br />
            Senior UX/UI Designer
            <br />
            2018 – 2019
          </p>
          <p>
            <strong>Ducks Unlimited Canada</strong> / Wetland &amp; Wildlife
            Conservancy
            <br />
            UX Specialist
            <br />
            2012 – 2018
          </p>
          <p>
            <strong>UX Lab</strong> / UX &amp; Usability Testing Space
            <br />
            Co-Founder
            <br />
            2017 – 2018
          </p>
          <p>
            <strong>UX Winnipeg</strong> / Events &amp; Community Organization
            <br />
            Co-Organizer
            <br />
            2017 – 2018
          </p>
          <p>
            <strong>Relish</strong> / Branding &amp; Design Studio
            <br />
            Graphic Designer
            <br />
            2009 – 2012
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
