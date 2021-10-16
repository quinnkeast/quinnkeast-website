import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { getAllBooks } from "../lib/api";

export default function Reading({ booksByYear }) {
  const years = booksByYear;
  return (
    <Layout>
      <Head>
        <title>Reading List | Quinn Keast</title>
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Reading list</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          What I’m reading and my opinions and all that.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-5 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-4 md:pt-8">
        {years.map((year, i) => (
          <>
            <div className="col-span-5 md:col-span-1 md:flex">
              <span className="text-black-lighter inline-block leading-snug pr-8 mt-3.5 text-sm">
                {year.year}
              </span>
            </div>
            <div className="col-span-5 md:col-span-4 align-baseline">
              <table className="table-fixed w-full text-sm mt-3 mb-6">
                <thead className="hidden md:table-header-group">
                  <tr>
                    <th className="w-full md:w-3/12 text-left pb-2">Title</th>
                    <th className="w-full md:w-3/12 text-left pb-2">Author</th>
                    <th className="w-full md:w-2/12 text-left pb-2">Date</th>
                    <th className="w-full md:w-4/12 text-left pb-2">Thoughts</th>
                  </tr>
                </thead>
                <tbody>
                  {year.books.map((book, i) => (
                    <tr className="flex flex-col md:table-row border-t border-black border-opacity-10 align-top leading-tight">
                      <td className="pt-2 md:pb-2 pr-2">
                        {book.reading && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#ff0000"
                            className="w-5 inline-block mr-1"
                          >
                            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                          </svg>
                        )}
                        {book.title}
                      </td>
                      <td className="md:pt-2 md:pb-2 pr2"><span className="md:hidden">by </span>{book.author}</td>
                      <td className="md:pt-2 md:pb-2 pr-2">{book.date}</td>
                      <td className="md:pt-2 pb-2">{book.thoughts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ))}
        <div className="col-span-5 mt-4 flex">
          <small className="text-black-lighter">Missing thoughts are just me not remembering exactly what I thought at the time.</small>
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
