import Layout from "../components/layout";
import PageHeader from "../components/page-header";
//import PostItem from "../components/post-item";
import { getAllFavourites } from "../lib/api";

export default function Index({ allFavourites }) {
  const books = allFavourites.books;
  return (
    <Layout>
      <PageHeader>
        <h1>Favourites</h1>
        <p className="text-2xl">
          “Man’s mind, once stretched by a new idea, never regains its original
          dimensions.” —Oliver Wendell Holmes
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-5 border-t border-black border-opacity-10 mt-12 pt-8">
        <div className="col-span-1">
          <span className="text-black-lighter inline-block leading-snug pr-8 mt-3.5">
            Favourites
          </span>
        </div>
        <div className="grid md:grid-cols-4 gap-x-12 gap-y-10 md:col-span-4 align-baseline">
          {books.map((book, i) => (
            <div className="col-span-1" key={i}>
              <img
                src={book.cover}
                alt={book.title}
                className="inline-block w-full"
              />
              <h3 className="mt-4 text-base leading-tight">
                {book.title}
                <br />
                <span className="m-0 leading-tight text-black-lighter">
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
