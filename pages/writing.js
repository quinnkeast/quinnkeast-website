import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostItem from "../components/post-item";
import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout pageName="Writing">
      <Head>
        <meta
          property="og:description"
          content={`A collection of thinking on user experience, design, and business.`}
          key="description"
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
          A collection of thinking on user experience, design, and business.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-6 md:mt-12 pt-0 post-list">
        <PostItem post={heroPost} hero={true} />
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
  ]);

  return {
    props: { allPosts },
  };
}
