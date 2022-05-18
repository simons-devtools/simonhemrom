import styled from "styled-components";

const StyledProjects = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 100px 0px;
`;

export default function Projects() {
  return (
    <StyledProjects>
      <h2 className="small-heading">Other Noteworthy Projects</h2>
      <div className="">
        <h4>This is projects section</h4>
      </div>
    </StyledProjects>
  );
}
