import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import PostHeader from "../../components/post-header";
import PostHero from "../../components/post-hero";
import PostBody from "../../components/post-body";
import Tags from "../../components/tags";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";
import mdxToHtml from "../../lib/mdxToHtml";

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
              <title>{post.title}</title>
              <meta
                property="og:description"
                content={post.description ? post.description : post.subtitle}
                key="description"
              />
              <meta property="og:title" content={post.title} key="title" />
              <meta
                property="og:url"
                content={`https://quinnkeast.com/writing/${post.slug}`}
                key="url"
              />
              <meta
                property="og:image"
                content={post.ogImage.url}
                key="image"
              />
              <meta
                property="twitter:title"
                content={post.title}
                key="twitter-title"
              />
              <meta
                property="twitter:description"
                content={post.description ? post.description : post.subtitle}
                key="twitter-description"
              />
              <meta
                property="twitter:image"
                content={post.ogImage.url}
                key="twitter-image"
              />
            </Head>
            <PostHeader
              title={post.title}
              subtitle={post.subtitle}
              date={post.date}
              author={post.author}
              time={post.readingTime}
            />
            <PostBody content={post.content} />
            {post.tags && <Tags tags={post.tags} />}
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "subtitle",
    "published",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "tags",
    "external",
  ]);

  const content = await mdxToHtml(post.content);
  
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
