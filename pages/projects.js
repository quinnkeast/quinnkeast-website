//import Container from "../components/container";
//import MoreStories from "../components/more-stories";
//import HeroProject from "../components/hero-post";
//import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import Head from "next/head";

export default function Projects({ allProjects }) {
  const heroProject = allProjects[0];
  const moreProjects = allProjects.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example</title>
        </Head>
        <Container>
          <Intro />
          {heroProject && (
            <HeroProject
              title={heroProject.title}
              coverImage={heroProject.coverImage}
              date={heroProject.date}
              author={heroProject.author}
              slug={heroProject.slug}
              excerpt={heroProject.excerpt}
            />
          )}
          {moreProjects.length > 0 && <MoreStories posts={moreProjects} />}
        </Container>
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
