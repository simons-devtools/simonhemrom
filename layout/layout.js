import React, { Fragment } from "react";
import { IconLoader } from "../configs/icons";
import { theme, Globalstyles } from "../styles";
import { ThemeProvider } from "styled-components";
import { Sitemeta, Navbar, Email, Social, Footer } from "../layout";

export default function Layout({ children, location }) {
  const [isActive, setIsActive] = React.useState(true);
  setTimeout(() => {
    setIsActive(false);
  }, 3000);

  return (
    <Fragment>
      <Sitemeta title="Simon Hemrom | Portfolio" />

      <ThemeProvider theme={theme}>
        <Globalstyles />
        {isActive ? (
          <IconLoader />
        ) : (
          <Fragment>
            <Navbar />
            <Social />

            <main id="content">{children}</main>

            <Email />
            <Footer />
          </Fragment>
        )}
      </ThemeProvider>
    </Fragment>
  );
}
