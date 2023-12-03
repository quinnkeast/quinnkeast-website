import { useRouter } from "next/router";
import ErrorPage from "next/error";
import ProjectBody from "../../components/project-body";
import useUser from "../../lib/useUser";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import mdxToHtml from "../../lib/mdxToHtml";
import Layout from "../../components/layout";

export default function Project({ project, moreProjects, preview }) {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // Fetch the user client-side
  const { user } = useUser({
    redirectTo: `/login?ref=${project.slug}`,
    redirectIfFound: `/projects/${project.slug}`,
  });

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return (
      <Layout>
        <div className="min-h-screen block"></div>
      </Layout>
    );
  }

  // Once the user request finishes, show the content
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article className="mb-0">
            <Head>
              <title>{`${project.title} | Quinn Keast`}</title>
              <meta property="og:image" content={project.ogImage.url} />
            </Head>
            <div className={`max-w-lg mx-auto`}>
              <h1 className="text-xl md:text-4xl md:mb-8">{project.hero}</h1>
              <div className="grid md:grid-cols-3 md:gap-4">
                <div>
                  <p className="text-sm leading-tight">
                    <span className="text-black-lighter">Organization</span> <br />
                    <span className="font-bold">{project.client}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-tight">
                    <span className="text-black-lighter">Role</span> <br />
                    <span className="font-bold">{project.role}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-tight">
                    <span className="text-black-lighter">Period</span> <br />
                    <span className="font-bold">{project.period}</span>
                  </p>
                </div>
              </div>
            </div>
            <ProjectBody content={project.content} />
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug, [
    "title",
    "subtitle",
    "hero",
    "role",
    "period",
    "published",
    "restricted",
    "group",
    "client",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = (await mdxToHtml(project.content)) || "";

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects(["slug"]);
  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
