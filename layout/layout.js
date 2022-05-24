import React, { Fragment } from "react";
import { theme, Globalstyles } from "../styles";
import { ThemeProvider } from "styled-components";
import { Sitemeta, Navbar, Footer, Social, Email } from "../layout";

export default function Layout({ children }) {
  const [isMouted, setIsMouted] = React.useState(true);
  setTimeout(() => {
    setIsMouted(false);
  }, 3000);

  const styles = {
    marginTop: "20%",
    fontSize: "36px",
    textAlign: "center",
    color: "var(--green)",
  };

  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      {isMouted ? (
        <div style={styles}>Hi</div>
      ) : (
        <Fragment>
          <Sitemeta />
          <Navbar />

          <main id="content">
            {children}
            <Footer />
          </main>

          <Social />
          <Email />
        </Fragment>
      )}
    </ThemeProvider>
  );
}
