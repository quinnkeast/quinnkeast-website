import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PageHeader from "../../components/page-header";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";

export default function Project({ post, moreProjects, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <ProjectTitle>Loading…</ProjectTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | Quinn Keast</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PageHeader>
              <h1>{post.title}</h1>
              <p className="text-2xl">
                This section has been temporarily removed while I redo some of my
                website’s foundations.
              </p>
            </PageHeader>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getProjectBySlug(params.slug, [
    "title",
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
  const posts = getAllProjects(["slug"]);

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
