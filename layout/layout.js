import { theme, Globalstyles } from "../styles";
import { Sitemeta, Navbar, Footer } from "../layout";
import styled, { ThemeProvider } from "styled-components";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Sitemeta />
      <Globalstyles />
      <StyledBody>
        <Navbar />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledBody>
    </ThemeProvider>
  );
}

const StyledBody = styled.div`
  /* width: 93.5%; */
  width: 90%;
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
    padding: 0px 25px;
  }
`;

const StyledMain = styled.main`
  width: 70%;
  margin: 0px auto;
  padding: 50px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
  }
`;
