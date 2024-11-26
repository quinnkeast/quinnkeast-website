import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { getAllFavourites } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import { useState } from 'react';

const jobs = [
  {
    name: "Bryter",
    type: "B2B",
    roles: ["product designer", "researcher"],
    platforms: ["mobile", "desktop"]
  },
  {
    name: "Another Company",
    type: "B2C",
    roles: ["developer", "manager"],
    platforms: ["web", "desktop"]
  }
];

export default function Index({ allFavourites }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelection = (job) => {
    setSelectedJob(job);
  };

  const getUniqueValues = (key) => {
    return [...new Set(jobs.flatMap(job => job[key]))];
  };

  const isSelected = (value, key) => {
    if (!selectedJob) return false;
    if (Array.isArray(selectedJob[key])) {
      return selectedJob[key].includes(value);
    }
    return selectedJob[key] === value;
  };

  return (
    <Layout>
      <Head>
        <title>{`Favourites | ${SITE_NAME}`}</title>
        <meta
          property="og:description"
          content={`Favourite books for stretching the mind with new ideas.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`Favourites | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content="https://quinnkeast.com/favourites"
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Favourites</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          “Man’s mind, once stretched by a new idea, never regains its original
          dimensions.”
          <br />
          —Oliver Wendell Holmes
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-5 border-t border-black/10 mt-8 md:mt-12 pt-4 md:pt-8">
        <div className="col-span-1 hidden md:flex">
        <div>
              <h1>Job Selection</h1>
              <div>
                {jobs.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelection(job)}
                    style={{
                      padding: '10px',
                      margin: '5px',
                      border: selectedJob === job ? '2px solid blue' : '1px solid gray',
                      backgroundColor: selectedJob === job ? 'lightblue' : 'white',
                      cursor: 'pointer'
                    }}
                  >
                    {job.name}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', marginTop: '20px' }}>
                {['type', 'roles', 'platforms'].map((key) => (
                  <div key={key} style={{ margin: '0 10px' }}>
                    <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                    {getUniqueValues(key).map((value, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '5px',
                          margin: '5px 0',
                          border: '1px solid gray',
                          backgroundColor: isSelected(value, key) ? 'yellow' : 'white'
                        }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
