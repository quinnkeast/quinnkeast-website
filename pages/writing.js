import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import PostItem from "../components/post-item";
import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <PageHeader>
        <h1>Writing</h1>
        <p className="text-2xl">
          A collection of thinking on user experience, design, and business.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-12 pt-0">
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
