import Head from "next/head";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
import { getAllFavourites } from "../lib/api";

export default function Index({ allFavourites }) {
  const books = allFavourites.books;

  return (
    <Layout pageName="Favourites">
      <Head>
        <meta
          property="og:description"
          content={`Favourite books for stretching the mind with new ideas.`}
          key="description"
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
      <div className="grid md:grid-cols-5 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-4 md:pt-8">
        <div className="col-span-1 hidden md:flex">
          <span className="text-black-lighter inline-block leading-snug pr-8 mt-3.5">
            Favourites
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-12 gap-y-6 md:gap-y-10 md:col-span-4 align-baseline">
          {books.map((book, i) => (
            <div className="col-span-1" key={i}>
              <img
                src={book.cover}
                alt={book.title}
                className="inline-block w-full"
              />
              <h3 className="mt-2 md:mt-4 text-base leading-tight">
                {book.title}
                <br />
                <span className="m-0 leading-tight font-normal text-black-lighter ">
                  {book.author}
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allFavourites = getAllFavourites(["books"]);

  return {
    props: { allFavourites },
  };
}
