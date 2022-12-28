import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PageHeader from "../../components/page-header";
import ProjectBody from "../../components/project-body";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import mdxToHtml from "../../lib/mdxToHtml";
import Layout from "../../components/layout";

export default function Project({ project, moreProjects, preview }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <ProjectTitle>Loading…</ProjectTitle>
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
                  <p className="text-sm leading-tight"><span className="text-black-lighter">Client</span> <br /><span className="font-bold">{project.client}</span>
                  </p>
                </div>
                <div>
									<p className="text-sm leading-tight"><span className="text-black-lighter">Role</span> <br /><span className="font-bold">{project.role}</span></p>
                </div>
                <div>
									<p className="text-sm leading-tight"><span className="text-black-lighter">Period</span> <br /><span className="font-bold">{project.period}</span>
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
    "client",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage"
  ]);

  const content = await mdxToHtml(project.content) || "";

  return {
    props: {
      project: {
        ...project,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug
        }
      };
    }),
    fallback: false
  };
}
