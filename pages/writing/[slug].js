import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
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
              <title>{post.title} | Next.js Blog Example</title>
              {/*<meta property="og:image" content={post.ogImage.url} />*/}
            </Head>
            <PostHeader
              title={post.title}
              subtitle={post.subtitle}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "subtitle",
    "published",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
