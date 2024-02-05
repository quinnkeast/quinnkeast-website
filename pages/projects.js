import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import ProjectItem from "../components/project-item";
import { SITE_NAME } from "../lib/constants";
import { getAllProjects } from "../lib/api";

export default function Projects({ groupedProjects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Projects | ${SITE_NAME}`}</title>
          <meta
            property="og:description"
            content={`I’m Quinn Keast, a user experience & product designer.`}
            key="description"
          />
          <meta
            property="og:title"
            content={`Projects | ${SITE_NAME}`}
            key="title"
          />
          <meta
            property="og:url"
            content="https://quinnkeast.com/projects"
            key="url"
          />
        </Head>
        <PageHeader>
          <h1>Projects</h1>
          <p className="text-2xl">
            A few case studies to show how I go about bridging business and user
            needs to design better products and experiences.
          </p>
        </PageHeader>
        <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-4">
          <div className="bg-yellow bg-opacity-20 text-yellow-700 px-2 py-1 rounded md:col-span-2 md:col-start-2 mt-6 mb-4 text-sm">
            <strong>Note</strong>: Several more case studies are in progress and
            will be added soon.
          </div>
          {groupedProjects["sourcegraph"].map((project, i) => {
            return (
              <React.Fragment key={project.slug}>
                {project.published && (
                  <>
                    <div className="col-span-1 md:pr-4 md:text-right flex flex-col md:flex-row md:justify-end items-start pt-4">
                      {i === 0 && (
                        <h2 className="font-normal text-base text-black-lighter mt-0 flex-grow text-left">
                          2020–2023
                        </h2>
                      )}
                      {project.size && (
                        <span className="mt-2 md:mt-1 px-1.5 leading-base rounded-full border border-black border-opacity-10 text-black-lighter text-xs inline-block flex-none capitalize">
                          {project.size}
                        </span>
                      )}
                    </div>
                    <div className="md:col-span-2 max-w-md">
                      <h3 className="leading-tight text-lg font-medium mb-0 mt-2 md:mt-4">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-base leading-tight">
                        {project.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-6 md:mt-8 pt-4 md:pt-8">
          <div className="col-span-1">
            <h2 className="font-normal text-base text-black-lighter">
              Archive
            </h2>
          </div>
          <div className="md:col-span-2 grid gap-10 md:grid-cols-3 md:pt-6">
            {groupedProjects["undefined"].map((project) => (
              <ProjectItem project={project} key={project.slug} />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-4 md:pt-8">
          <div className="col-span-1">
            <h2 className="font-normal text-base text-black-lighter">
              Select client list
            </h2>
          </div>
          <div className="col-span-1 mt-4">
            <ul className="client-list">
              <li>24/7 InTouch</li>
              <li>Andrea Shelley</li>
              <li>Arlan Group</li>
              <li>Canadian Ultimate Championships</li>
              <li>Ducks Unlimited Canada</li>
              <li>Emerge Knowledge Design</li>
              <li>Forth</li>
              <li>Funding Change</li>
              <li>IBEX Payroll</li>
              <li>Jackfruit</li>
              <li>Johnston Group</li>
            </ul>
          </div>
          <div className="col-span-1 mt-4">
            <ul className="client-list">
              <li>Lighthouse</li>
              <li>Marley Spoon</li>
              <li>MODS</li>
              <li>Native Plant Solutions</li>
              <li>Neovation</li>
              <li>Oak Hammock Marsh Interpretive Centre</li>
              <li>Ultimate Canada</li>
              <li>UnionWare</li>
              <li>Walnut</li>
              <li>VC Ultimate</li>
            </ul>
          </div>
        </div>
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

  return {
    props: { groupedProjects },
  };
}
