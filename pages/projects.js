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
          <title>{`Craft | ${SITE_NAME}`}</title>
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
          <h1>Craft</h1>
          <p className="text-2xl">
            Case studies, explorations, and ideas about design.
          </p>
        </PageHeader>
        <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-16 pt-4 md:pt-8">
          <div className="col-span-1 md:pr-4 md:text-right flex flex-col md:flex-row md:justify-end items-start pt-4">
            <h2 className="font-normal text-base text-black-lighter mt-0 flex-grow text-left">
              2023–2024
            </h2>
            <span className="mt-2 md:mt-1 px-1.5 leading-base rounded-full border border-black border-opacity-10 text-black-lighter text-xs inline-block flex-none capitalize">
              WIP
            </span>
          </div>
          <div className="md:col-span-2 max-w-md">
            <h3 className="leading-tight text-lg font-medium mb-0 mt-2 md:mt-4 text-black-lighter">
              Building a developer platform for internal tools at Airplane
            </h3>
            <p className="mt-1 text-base leading-tight text-black-lighter">
              Case studies coming soon.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 mt-0 md:mt-8 pt-4 md:pt-0">
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
        <div className="grid md:grid-cols-3 mt-6 md:mt-2 pt-4 md:pt-8">
          <div className="col-span-1">
            <h2 className="font-normal text-base text-black-lighter mb-4 md:mb-0">
              Further back
            </h2>
          </div>
          <div className="md:col-span-2 grid gap-10 md:grid-cols-3 md:pt-6">
            {groupedProjects["undefined"].map((project) => (
              <ProjectItem project={project} key={project.slug} />
            ))}
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
