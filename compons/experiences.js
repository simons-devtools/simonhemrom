import styled from "styled-components";

const StyledExperiences = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 100px 0px;
`;

export default function Experiences() {
  return (
    <StyledExperiences id="experiences-section">
      <h2 className="numbered-heading">Where I ve Worked</h2>
      <div className="">
        <h4>This is experiences section</h4>
      </div>
    </StyledExperiences>
  );
}
