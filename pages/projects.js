import Head from "next/head";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";

export default function Projects({ allProjects }) {
  const heroProject = allProjects[0];
  const moreProjects = allProjects.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Projects | Quinn Keast</title>
        </Head>
        <p>Placeholder</p>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
}
