import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import Tags from "../../components/tags";
import { getTalkBySlug, getAllTalks } from "../../lib/api";
import Head from "next/head";

import markdownToHtml from "../../lib/markdownToHtml";

export default function Talk({ talk, moreTalks, preview }) {
  const router = useRouter();
  if (!router.isFallback && !talk?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{talk.title}</title>
              <meta
                property="og:description"
                content={talk.description}
                key="description"
              />
              <meta property="og:title" content={talk.title} key="title" />
              <meta
                property="og:url"
                content={`https://quinnkeast.com/speaking/${talk.slug}`}
                key="url"
              />
              <meta
                property="og:image"
                content={talk.ogImage.url}
                key="image"
              />
            </Head>
            <PostHeader
              title={talk.title}
              subtitle={talk.subtitle}
              date={talk.date}
              author={talk.author}
              time={talk.readingTime}
              wide={talk.wide}
            />
            <PostBody content={talk.content} wide={talk.wide} />
            {talk.tags && <Tags tags={talk.tags} wide={talk.wide} />}
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const talk = getTalkBySlug(params.slug, [
    "title",
    "subtitle",
    "description",
    "published",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
    "external",
    "wide",
  ]);

  const content = await markdownToHtml(talk.content || "");

  return {
    props: {
      talk: {
        ...talk,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const talks = getAllTalks(["slug"]);

  return {
    paths: talks.map((talk) => {
      return {
        params: {
          slug: talk.slug,
        },
      };
    }),
    fallback: false,
  };
}
