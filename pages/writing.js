import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostItem from "../components/post-item";
import { getAllPosts } from "../lib/api";
import { SITE_NAME } from "../lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>{`Writing | ${SITE_NAME}`}</title>
        <meta
          property="og:description"
          content={`A collection of thinking on user experience, design, and business.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`Writing | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://quinnkeast.com/writing"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Writing</h1>
        <p className="leading-snug text-base md:text-2xl subpixel-antialiased mt-0 md:mt-2">
          A collection of thinking on design, tech, and the art of making sense.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black/10 mt-6 md:mt-12 pt-0 post-list">
        <PostItem post={heroPost} />
        {morePosts.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "coverImage",
    "tags",
    "external",
    "starred",
  ]);

  return {
    props: { allPosts },
  };
}
