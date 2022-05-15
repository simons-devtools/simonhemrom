import { Sitemeta, Navbar, Footer } from "../layout";

export default function Layout({ children }) {
  return (
    <>
      <Sitemeta />
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
