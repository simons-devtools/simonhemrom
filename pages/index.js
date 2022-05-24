import {
  Header,
  Aboutme,
  Experiences,
  Features,
  Projects,
  Contactme,
} from "../compons";
import styled from "styled-components";

const StyledMain = styled.main`
  counter-reset: section;
`;

export default function IndexPage() {
  return (
    <StyledMain>
      <Header />
      <Aboutme />
      <Experiences />
      <Features />
      <Projects />
      <Contactme />
    </StyledMain>
  );
}
