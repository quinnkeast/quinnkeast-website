import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";

function Speaking() {
  return (
    <Layout>
      <Head>
        <title>Readme | Quinn Keast</title>
      </Head>
      <PageHeader>
        <h1>Speaking</h1>
        <p className="text-2xl">
          I’ve had the honour to speak at events around the world on topics and
          ideas that I find personally exciting or inspiring—and that I think
          that you will, too.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-12 pt-8">
        <div className="col-span-1">
          <h2 className="text-base text-black-lighter font-normal">
            Conferences & presentations
          </h2>
        </div>
        <div className="md:col-span-2">
          <p>
            Speaker at Content Strategy Lausanne
            <br />
            <strong>“Nobody’s a Copywriter, but Everybody Writes Copy”</strong>
            <br />
            December 2020
            <br />
            <a href="https://www.youtube.com/watch?v=GQX_UCufzI4">
              Watch on YouTube
            </a>
          </p>
          <p>
            Speaker at <a href="https://www.uber.design/">Uber Design</a> Night
            Amsterdam
            <br />
            <strong>
              “A Level Playing Field: What Sports, Hearing Loss, and Language
              Can Teach Us About Better Communication in UX”
            </strong>
            <br />
            June 2019
          </p>
          <p>
            Speaker at{" "}
            <a href="https://uxcopenhagen.com/">
              UX Copenhagen 2019: Consent &amp; Privacy
            </a>
            <br />
            <strong>
              “Navigating Our Evolving UX Landscape: Why and How to Create Your
              Personal Code of Ethics”
            </strong>
            <br />
            March 2019
            <br />
            <a href="https://www.youtube.com/watch?v=D0EMMCoUYng">
              Watch on YouTube
            </a>
          </p>
          <p>
            Workshop at <a href="https://marleyspoon.de">Marley Spoon</a>
            <br />
            <strong>
              “Articulating Design Challenges with ‘How Might We’ Statements”
            </strong>
            <br />
            January 2019
          </p>
          <p>
            Speaker at UX Slovenia
            <br />
            <strong>
              “Accessible Accessibility: How You Can Make More Inclusive
              Products &amp; Experiences”
            </strong>
            <br />
            December 2018
          </p>
          <p>
            Speaker at IxDA Berlin: World Interaction Design Day
            <br />
            <strong>
              “Breaking Down Unintended Barriers in Your Workplace for More
              Inclusive Teams”
            </strong>
            <br />
            September 2018
            <br />
            <a href="https://vimeo.com/309440740">Watch on Vimeo</a>
          </p>
          <p>
            Speaker at <a href="https://rrc.mb.ca">Red River College</a>
            <br />
            <strong>“Designing Sustainability: Accessibility”</strong>
            <br />
            January 2018
          </p>
          <p>
            Speaker at UX Winnipeg
            <br />
            <strong>“Word Choices and Language in UX”</strong>
            <br />
            October 2017
          </p>
          <p>
            Co-Speaker with Jen Goertzen at North Forge Technology Exchange
            <br />
            <strong>
              “Putting UX to the Test: User Interviews &amp; Usability Testing”
            </strong>
            <br />
            May 2017
          </p>
          <p>
            Speaker at Ducks Unlimited Canada
            <br />
            <strong>“On User Experience”</strong>
            <br />
            September 2015
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-12 pt-8">
        <div className="col-span-1">
          <h2 className="text-base text-black-lighter font-normal">Book Me</h2>
        </div>
        <div className="md:col-span-2">
          <h2>Interested in having me speak?</h2>

          <p>
            I’m always interested in new speaking engagements on existing topics
            or new ideas. If you’re interested in having me speak at your event
            or run a workshop with your team, please get in touch at{" "}
            <a href="mailto:hello@quinnkeast.com">hello@quinnkeast.com</a>!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Speaking;
