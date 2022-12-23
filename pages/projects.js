import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import ProjectItem from "../components/project-item";
import { getAllProjects } from "../lib/api";

export default function Projects({ allProjects }) {
  return (
    <>
      <Layout>
        <PageHeader>
          <h1>Projects</h1>
          <p className="text-2xl">
              A few case studies to show how I go about bridging business and user needs to design better experiences, plus a select client list and kind words over the years.
          </p>
        </PageHeader>
        <div className="grid md:grid-cols-4 md:gap-12 border-t border-black border-opacity-10 mt-6 md:mt-12 pt-12">
			{allProjects.map((project, i) => (
				<ProjectItem project={project} key={i} />
			))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "subtitle",
    "slug",
    "published",
    "restricted",
    "thumbnail",
  ]);

  return {
    props: { allProjects },
  };
}
