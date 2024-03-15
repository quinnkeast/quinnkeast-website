import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";
import { ascii } from "../lib/ascii";
import Script from "next/script";

function About() {
  return (
    <Layout>
      <Head>
        <title>{`About | ${SITE_NAME}`}</title>
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
        <script>{ascii}</script>
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
          <h2 className="font-normal text-base text-black-lighter">
            The nitty gritty
          </h2>
        </div>
        <div className="md:col-span-2 max-w-md">
          <p>
            I enjoy crafting new products and experiences and working to make
            existing ones better. The processes and thinking involved in
            creating effective products through human-centred design are
            immensely satisfying.
          </p>

          <p>
            I have more than 14 years of expertise that covers the entire
            product design process: from research and strategy to execution and
            shipping. My background is in graphic design, complemented by a
            lifetime of tinkering with digital tools, languages, and
            technologies that gives me a high-craft and deep technical basis for
            my practice.
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
            and I enjoy playing Ultimate frisbee, writing, and hanging out with
            my mini Australian Shepherd.
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
          <h2 className="font-normal text-base text-black-lighter">Timeline</h2>
        </div>
        <div className="md:col-span-2 mt-1">
          <p className="mb-5">
            <strong>Airplane</strong> / Developer Infrastructure for Internal
            Tools
            <br />
            <span className="text-black-lighter text-sm">
              San Francisco <span className="bullet">•</span> Remote
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2023 – 2024
              </div>
              <div className="col-span-3 md:col-span-4">
                Staff Product Designer
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2024
              </div>
              <div className="col-span-3 md:col-span-4">
                (Acquired by Airtable)
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Sourcegraph</strong> / Universal Code Search & Intelligence
            Platform
            <br />
            <span className="text-black-lighter text-sm">
              San Francisco <span className="bullet">•</span> Remote
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2022 – 2023
              </div>
              <div className="col-span-3 md:col-span-4">
                Staff Product Designer
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2020 – 2022
              </div>
              <div className="col-span-3 md:col-span-4">
                Senior Product Designer
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Marley Spoon</strong> / Meal Kit Service
            <br />
            <span className="text-black-lighter text-sm">
              Berlin <span className="bullet">•</span> Hybrid
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2019 – 2020
              </div>
              <div className="col-span-3 md:col-span-4">UX Lead</div>
            </div>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2018 – 2019
              </div>
              <div className="col-span-3 md:col-span-4">
                Senior UX/UI Designer
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Ducks Unlimited Canada</strong> / Wetland & Wildlife
            Conservancy
            <br />
            <span className="text-black-lighter text-sm">
              Canada <span className="bullet">•</span> Hybrid
            </span>
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2012 – 2018
              </div>
              <div className="col-span-3 md:col-span-4">UX Specialist</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>UX Lab</strong> / Usability Testing Space
            <br />
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2017 – 2018
              </div>
              <div className="col-span-3 md:col-span-4">Co-Founder</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>UX Winnipeg</strong> / Design Community Events &
            Organization
            <br />
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2017 – 2018
              </div>
              <div className="col-span-3 md:col-span-4">Co-Organizer</div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Caribou</strong> / Strategy & Design Consultancy
            <br />
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2011 – Present
              </div>
              <div className="col-span-3 md:col-span-4">
                Co-Founder & Designer
              </div>
            </div>
          </p>
          <p className="mb-5">
            <strong>Relish</strong> / Branding & Design Studio
            <br />
            <div className="grid grid-cols-5">
              <div className="text-black-lighter col-span-2 md:col-span-1">
                2009 – 2012
              </div>
              <div className="col-span-3 md:col-span-4">Graphic Designer</div>
            </div>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="font-normal text-base text-black-lighter">
            Some folks I’ve worked with
          </h2>
        </div>
        <div className="col-span-1 mt-5">
          <ul className="client-list">
            <li>24/7 InTouch</li>
            <li>Airplane</li>
            <li>Andrea Shelley</li>
            <li>Arlan Group</li>
            <li>Canadian Ultimate Championships</li>
            <li>Ducks Unlimited Canada</li>
            <li>Emerge Knowledge Design</li>
            <li>Forth</li>
            <li>Funding Change</li>
            <li>IBEX Payroll</li>
            <li>Jackfruit</li>
            <li>Johnston Group</li>
          </ul>
        </div>
        <div className="col-span-1 mt-5">
          <ul className="client-list">
            <li>Lighthouse</li>
            <li>Marley Spoon</li>
            <li>MODS</li>
            <li>Native Plant Solutions</li>
            <li>Neovation</li>
            <li>Oak Hammock Marsh Interpretive Centre</li>
            <li>Sourcegraph</li>
            <li>Ultimate Canada</li>
            <li>UnionWare</li>
            <li>Walnut</li>
            <li>VC Ultimate</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default About;
