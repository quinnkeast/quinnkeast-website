import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
//import ProjectItem from "../components/project-item"; // Assuming this is used elsewhere and is a valid component.
import { SITE_NAME } from "../lib/constants";
import { getAllProjects } from "../lib/api";

const projectVisible = (project) => {
  return (
    project && (process.env.NODE_ENV === "development" || project.published)
  );
};

// This is hacky for the moment
const sections = ["2023–2024", "2020–2023", "2018–2020", "Older stuff"];

const ProjectGroup = ({ projects, index }) => {
  return projects.map((project, i) => (
    <React.Fragment key={project.slug}>
      {projectVisible(project) && (
        <>
          <div className="col-span-1 md:pr-4 md:text-right flex flex-col md:flex-row md:justify-end items-start pt-4">
            {i === 0 && (
              <h2 className="font-normal text-base text-black-lighter mt-0 flex-grow text-left">
                {sections[index]}
              </h2>
            )}
            {project.size && (
              <span className="mt-2 md:mt-1 px-1.5 pb-0.5 leading-base rounded-full border border-black/10 text-black-lighter text-xs inline-block flex-none capitalize">
                {project.size}
              </span>
            )}
          </div>
          <div className="md:col-span-2 max-w-md">
            <h3 className="leading-tight text-lg font-medium mb-0 mt-2 md:mt-4">
              <Link href={`/craft/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="mt-2 text-base leading-tight">{project.subtitle}</p>
            {/* project.restricted && (
              <span className="text-xxs text-black-lighter inline-block">
                <span className="lock">🔒</span> Restricted
              </span>
            ) */}
          </div>
        </>
      )}
    </React.Fragment>
  ));
};

const BonusGroup = () => {
  return (
    <React.Fragment>
      <div className="col-span-1 md:pr-4 md:text-right flex flex-col md:flex-row md:justify-end items-start mb-0">
        <h2 className="font-normal text-base text-black-lighter mt-0 flex-grow text-left">
          2024–Present
        </h2>
      </div>
      <div className="md:col-span-2 max-w-md">
        <h3 className="leading-tight text-lg font-medium mb-0 mt-2 md:mt-1">
          A growing list of things I’ve been working on at <a href="https://dittowords.com" target="_blank">Ditto</a>, in a somewhat loose order
        </h3>
        <ul className="ml-3">
          <li className="text-base leading-tight"><a href="https://www.dittowords.com/post/ditto-2-0-the-why-behind-the-launch" target="_blank">Defining and launching Ditto 2.0</a>
          </li>
          <li className="text-base leading-tight"><a href="https://www.dittowords.com/post/dont-sweat-the-setup-and-other-major-improvements-to-ditto" target="_blank">Immediately learning how Ditto 2.0 could be improved</a>
          </li>
          <li className="text-base leading-tight">Working with <a href="https://fuzzco.com/" target="_blank">Fuzzco</a> to launch a <a href="https://www.dittowords.com/post/ditto-2-0-the-why-behind-the-rebrand" target="_blank">new brand identity</a></li>
          <li className="text-base leading-tight"><Link href="/writing/what-we-learned-building-ai-style-guides-for-product-copy">Product copy style guides and Magic Edit</Link>—AI-powered drafting, linting, and suggested edits for product copy</li>
          <li className="text-base leading-tight">Creating a <a href="https://www.dittowords.com/post/our-ephemeral-design-system-impermanence-as-intentional-strategy" target="_blank">new design system to support both a foundational overhaul and eventual rebrand at the same time</a></li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default function Craft({ groupedProjects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Craft | ${SITE_NAME}`}</title>
          <meta
            property="og:description"
            content={`I’m Quinn Keast, a user experience & product designer.`}
            key="description"
          />
          <meta
            property="og:title"
            content={`Craft | ${SITE_NAME}`}
            key="title"
          />
          <meta
            property="og:url"
            content="https://quinnkeast.com/craft"
            key="url"
          />
        </Head>
        <PageHeader>
          <h1>Craft</h1>
          <p className="text-base md:text-2xl">
            A running journal of case studies, explorations, and experiments.
          </p>
        </PageHeader>
        <div className="grid md:grid-cols-3 border-t border-black/10 mt-8 md:mt-16 pt-4 md:pt-8">
          <BonusGroup />
        </div>
        {Object.keys(groupedProjects).map((group, index) => {
          const gridClasses =
            index === 0
              ? "grid md:grid-cols-3 mt-0 pt-4 md:pt-8"
              : "grid md:grid-cols-3 mt-0 md:mt-8 pt-4 md:pt-0";
          return (
            <div className={gridClasses} key={group}>
              <ProjectGroup projects={groupedProjects[group]} index={index} />
            </div>
          );
        })}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects([
    "title",
    "subtitle",
    "slug",
    "date",
    "group",
    "size",
    "published",
    "restricted",
    "thumbnail",
  ]);

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const groupedProjects = groupBy(allProjects, "group");

  // Add a dateRange property to each project based on its group for the display logic
  Object.keys(groupedProjects).forEach((group) => {
    groupedProjects[group].forEach((project) => {
      const dateRanges = {
        airplane: "2023–2024",
        sourcegraph: "2020–2023",
        ms: "2018–2020",
      };

      project.dateRange = dateRanges[group] || "";
    });
  });

  return {
    props: { groupedProjects },
  };
}
