import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { getAllBooks } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import { BookOpen } from 'lucide-react';

export default function Reading({ booksByYear }) {
  const years = booksByYear;
  return (
    <Layout>
      <Head>
        <title>{`Reading List | ${SITE_NAME}`}</title>
        <meta
          property="og:description"
          content={`What I’m reading and my opinions and all that.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`Reading List | ${SITE_NAME}`}
          key="title"
        />
        <meta
          property="og:url"
          content={`https://quinnkeast.com/reading`}
          key="url"
        />
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Reading list</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          A list of what I’m reading and my opinions and all that.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-5 border-t border-black/10 mt-8 md:mt-12 pt-4 md:pt-8">
        {years.map((year, i) => (
          <React.Fragment key={year}>
            <div className="col-span-5 md:col-span-1 pt-0">
              <div
                className="text-black-lighter leading-snug pr-8 mt-3.5 text-sm sticky top-8 cursor-default group inline-flex gap-1 items-center"
              >
                {year.year}
                <span className="opacity-0 group-hover:opacity-60 pointer-events-none">
                  – {year.books.length}
                </span>
              </div>
            </div>
            <div className="col-span-5 md:col-span-4 align-baseline">
              <table className="table-fixed w-full text-sm mt-3 mb-6">
                <thead className="hidden md:table-header-group">
                  <tr>
                    <th className="w-full md:w-4/9 text-left pb-2 font-medium">
                      Title
                    </th>
                    <th className="w-full collapse md:visible md:w-2/9 text-left pb-2 font-medium">
                      Author
                    </th>
                    <th className="w-full md:w-3/9 text-left pb-2 font-medium">
                      Thoughts
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {year.books.map((book, i) => (
                    <tr
                      className="flex flex-col md:table-row border-t border-black/10 align-top"
                      key={book.title}
                    >
                      <td
                        className={`pt-2 md:pb-2 pr-2 flex md:items-center gap-1.5 ${
                          book.abandoned ? `line-through decoration-3` : ""
                        }`}
                      >
                        {book.reading && (
                          <BookOpen size="16" color="#ff0000" className="mt-1 md:mt-0 shrink-0" />
                        )}
                        <span>{book.title} <span className="visible md:hidden">by {book.author}</span></span>
                      </td>
                      <td className="md:pt-2 md:pb-2 pr-2 collapse md:visible">
                        <span className="inline-block">
                          {book.author}
                        </span>
                      </td>
                      <td className="md:pt-2 pb-2">
                        {book.thoughts}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        ))}
        <div className="col-span-3 col-start-2 mt-4 flex">
          <small className="text-black-lighter">
            <span className="line-through">Struck through</span> books are those
            I abandoned—which I’m trying to let myself do when a book isn’t
            right for me at that moment. Missing thoughts are just me not
            remembering exactly what I thought at the time.
          </small>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const booksByYear = getAllBooks();
  return {
    props: { booksByYear },
  };
}
