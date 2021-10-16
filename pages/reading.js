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
                    <th className="w-full md:w-2/12 text-left pb-2">Read in</th>
                    <th className="w-full md:w-4/12 text-left pb-2">Thoughts</th>
                  </tr>
                </thead>
                <tbody>
                  {year.books.map((book, i) => (
                    <tr className="flex flex-col md:table-row border-t border-black border-opacity-10 align-top leading-tight">
                      <td className="pt-2 md:pb-2 pr-2">{book.title}</td>
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
          <small className="text-black-lighter">Missing dates or thoughts are just me not remembering exactly when I read it or what I thought.</small>
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
