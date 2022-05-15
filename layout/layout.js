import React, { Fragment } from "react";
import { IconLoader } from "../configs/icons";
import { theme, Globalstyles } from "../styles";
import styled, { ThemeProvider } from "styled-components";
import { Sitemeta, Navbar, Email, Social, Footer } from "../layout";

export default function Layout({ children, location }) {
  console.log(location);

  // Set the window loader:
  const [isActive, setIsActive] = React.useState(true);
  setTimeout(() => {
    setIsActive(false);
  }, 5000);

  return (
    <Fragment>
      <Sitemeta title="Simon Hemrom | Protfolio" />

      <div id="root">
        <ThemeProvider theme={theme}>
          <Globalstyles />
          {isActive ? (
            <IconLoader />
          ) : (
            <BodyContent>
              <Navbar />
              <Social />
              <Email />

              <MainContent id="content">{children}</MainContent>

              <Footer />
            </BodyContent>
          )}
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

const BodyContent = styled.div`
  /* width: 93.5%; */
  width: 90%;
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
    padding: 0px 25px;
  }
`;

const MainContent = styled.main`
  width: 70%;
  margin: 0px auto;
  padding: 50px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
  }
`;
