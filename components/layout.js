import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children, pageName }) {
  return (
    <>
      <Meta pageName={pageName} />
      <Header />
      <div className="container mx-auto px-4 xl:max-w-screen-xl">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
