import { Meta, Navbar, Header, Footer } from "../layout";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <Header />
      <main style={{ width: "1200px", margin: "0 auto" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
