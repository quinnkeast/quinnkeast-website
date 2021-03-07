import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="container mx-auto px-4 xl:max-w-screen-xl">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
