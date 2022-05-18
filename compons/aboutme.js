import styled from "styled-components";

const StyledHeader = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 148px 0px;
`;

export default function Aboutme() {
  return (
    <StyledHeader id="about-section">
      <div className="">
        <h4>This is about section</h4>
      </div>
    </StyledHeader>
  );
}
