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
            This section has been temporarily removed while I redo some of my
            website’s foundations.
          </p>
        </PageHeader>
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
