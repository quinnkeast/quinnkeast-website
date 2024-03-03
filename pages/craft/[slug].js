import { useRouter } from "next/router";
import ErrorPage from "next/error";
import ProjectBody from "../../components/project-body";
import useUser from "../../lib/useUser";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import mdxToHtml from "../../lib/mdxToHtml";
import Layout from "../../components/layout";
import ProjectNavigation from "../../components/project-navigation";
import { useEffect } from "react";

export default function Project({
  project,
  preview,
  nextProject,
  prevProject,
}) {
  // Change bg to white
  useEffect(() => {
    document.body.classList.add("bg-craft");
    return () => {
      document.body.classList.remove("bg-craft");
    };
  }, []);

  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // Fetch the user client-side
  const { user } = useUser({
    redirectTo: `/login?ref=${project.slug}`,
    //redirectIfUserFound: `/craft/${project.slug}`,
  });

  // Once the user request finishes, show the content
  return (
    <Layout>
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
              <h1 className="text-xl md:text-4xl md:mb-8">
                {project.hero || project.title}
              </h1>
              <div className="grid md:grid-cols-3 md:gap-4">
                {project.client && (
                  <div>
                    <p className="text-sm leading-tight">
                      <span className="text-black-lighter">Organization</span>{" "}
                      <br />
                      <span className="font-medium">{project.client}</span>
                    </p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <p className="text-sm leading-tight">
                      <span className="text-black-lighter">Role</span> <br />
                      <span className="font-medium">{project.role}</span>
                    </p>
                  </div>
                )}
                {project.period && (
                  <div>
                    <p className="text-sm leading-tight">
                      <span className="text-black-lighter">Date</span> <br />
                      <span className="font-medium">{project.period}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
            <ProjectBody content={project.content} />
            <ProjectNavigation
              nextProject={nextProject}
              prevProject={prevProject}
            />
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

  const allProjects = await getAllProjects(["slug", "title", "date"]);

  const currentProjectIndex = allProjects.findIndex(
    (p) => p.slug === project.slug
  );
  const prevProject = allProjects[currentProjectIndex - 1] || null;
  const nextProject = allProjects[currentProjectIndex + 1] || null;

  return {
    props: {
      project: {
        ...project,
        content,
      },
      nextProject,
      prevProject,
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
