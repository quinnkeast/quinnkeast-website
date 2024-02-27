import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { SITE_NAME } from "../lib/constants";

function BrandBook() {
  return (
    <Layout>
      <Head>
        <title>{`Brand Book | ${SITE_NAME}`}</title>
        <meta
          property="og:description"
          content={`I’m writing a book about brand for product teams.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`About | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://quinnkeast.com/brand-book"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">
          A book on brand for product teams
        </h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          I’m writing a book. Here’s what it’s about, why you might find it
          helpful, and how to get updates!
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-8">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">
            What is this
          </h2>
        </div>
        <div className="md:col-span-2 max-w-md">
          <p>
            Every startup and product team I’ve worked with has in some way or
            another interacted with and shaped their product’s brand. And yet,
            while most of us have an instinctive understanding of the whole
            brand thing, I’ve found that most of us don’t have a full conceptual
            model or the language to anchor that understanding around.
          </p>

          <p>
            Brand is remarkably high leverage—even from day one of a new startup
            or product. But without a deep understanding of brand and without
            knowing how to act on it, we can’t apply this leverage well.
          </p>

          <p>
            Products teams that deeply understand brand can make better,
            higher-leverage decisions faster. They can reduce ambiguity and
            subjectivity and ship more effective, consistent, and coherent
            product outcomes. They can attract and retain a world-class team.
          </p>

          <p>
            There are other books and resources on brand and the practice of
            branding. But in my experience, these tend to be focused on an
            audience adjacent to startups and product teams: agencies, visual
            designers, marketing specialists, or a generalized business persona.
            Many tend to focus on one aspect of brand—particularly visual
            expression—and don’t provide the conceptual tools needed to
            understand and act upon brand in the context of a startup or product
            organization.
          </p>

          <p>
            <strong>I’m writing a book on brand for product teams</strong>,
            founders, product designers, engineers, and product managers. I hope
            this book will be valuable for anyone working in a startup or
            product organization.
          </p>

          <p>&mdash;</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="font-medium text-base text-black-lighter">
            Get updates
          </h2>
        </div>
        <div className="md:col-span-2 max-w-md">
          <p>
            If you’d like to receive very-occasional progress notes and thoughts
            along the way, sign up for updates!
          </p>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/brandprimer"
            method="post"
            target="popupwindow"
            onSubmit="window.open('https://buttondown.email/brandprimer', 'popupwindow')"
            className="flex flex-col gap-2 mt-4 items-start"
            autoComplete="off"
          >
            <label
              htmlFor="bd-email"
              className="text-black-lighter text-sm font-medium"
            >
              Your email address
            </label>
            <input
              type="email"
              name="email"
              id="bd-email"
              autoComplete="false"
              className="pt-1 pb-1.5 px-2.5 mb-1 self-stretch rounded-md border-black-lighter border-2 focus:outline-none focus:ring outline-offset-4 focus:outline bg-tan focus:bg-white focus:border-black"
            />
            <div className="flex flex-row gap-2.5 content-center items-center">
              <input
                type="submit"
                value="Sign up"
                className="inline rounded-md pt-0.5 pb-1 px-3 bg-black text-white text-sm font-normal hover:bg-black-lighter cursor-pointer flex-auto"
              />
              <span className="text-xs text-black-lighter flex-grow">
                You’ll receive an email to confirm your subscription
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default BrandBook;
