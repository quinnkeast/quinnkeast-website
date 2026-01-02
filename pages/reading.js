import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { getAllBooks, getAllFavourites } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import { BookOpen } from 'lucide-react';

export default function Reading({ booksByYear, favourites }) {
  const years = booksByYear;
  const favouriteBooks = favourites.books;
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
        <h1 className="text-2xl md:text-4xl">Reading</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          A list of what I’m reading and my opinions and all that.
        </p>
      </PageHeader>
      <div className="border-t border-black/10 mt-8 md:mt-12 pt-4 md:pt-8 grid">
        <div className="grid md:grid-cols-3 w-full">
          <div className="col-span-1">
            <h3 className="leading-snug mb-0 mt-0">
              Favourites
            </h3>
            <p className="text-base mb-6 mt-0 subpixel-antialiased">
              A rotating list of favourite reads.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 items-center">
            <p className="text-sm mb-6 md:mb-0 mt-0 subpixel-antialiased">
              “Man’s mind, once stretched by a new idea, never regains its original dimensions.”
              <br />
              <span className="text-xs">—Oliver Wendell Holmes</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 md:gap-x-3 gap-y-3 md:gap-y-5 items-start">
          {favouriteBooks.slice(0, 12).map((book, i) => (
            <div className="grid md:grid-rows-[320px_auto]" key={i}>
              <div className="flex items-end">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full block"
                />
              </div>
              <div className="mt-2 md:mt-4">
                <h3 className="mt-0 text-sm leading-tight">
                  {book.title}
                  <br />
                  <span className="m-0 leading-tight text-sm font-normal text-black-lighter">
                    {book.author}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-8 mb-4 md:mt-16 md:mb-12">
        <h3 className="leading-snug mb-0 mt-0">
          Reading list
        </h3>
        <p className="text-base mb-0 mt-0 subpixel-antialiased">
          What I’m reading and have read.
        </p>
      </div>
      <div className="grid md:grid-cols-5">
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
                      className="flex flex-col md:table-row border-t border-black/10 align-top items-baseline gap-3"
                      key={book.title}
                    >
                      <td
                        className={`table-cell pt-2 md:pb-2 ${
                          book.abandoned ? `line-through decoration-3` : ""
                        }`}
                      >
                        {book.reading && (
                          <BookOpen size="16" color="#ff0000" className="md:absolute mt-1 md:mt-[7px] shrink-0 -ml-6" />
                        )}
                        <p className="m-0 p-0 text-sm">{book.title} <span className="visible md:hidden">by {book.author}</span></p>
                      </td>
                      <td className="table-cell md:pt-2 md:pb-2 pr-2 collapse md:visible">
                        <p className="block text-black-lighter m-0 p-0 text-sm">
                          {book.author}
                        </p>
                      </td>
                      <td className="table-cell md:pt-2 pb-2">
                        <p className="block text-xs leading-snug m-0 p-0">{book.thoughts}</p>
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
  const favourites = getAllFavourites(["books"]);
  return {
    props: { booksByYear, favourites },
  };
}
