import { projects } from "../configs";
import styled from "styled-components";

const StyledProjects = styled.div`
  width: 1000px;
  margin: 0px auto;
  padding: 50px 0px;
  .projects-header {
    text-align: center;
    .small-title {
      color: var(--green);
      letter-spacing: 4px;
    }
  }
  .projects-content {
  }
`;

export default function Projects() {
  console.log("data", projects);

  return (
    <StyledProjects>
      <div className="projects-header">
        <h2 className="small-heading">Other Noteworthy Projects</h2>
        <p className="small-title">View the Archive</p>
      </div>
      <div className="projects-content"></div>
    </StyledProjects>
  );
}
