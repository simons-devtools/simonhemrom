import { features } from "../configs";
import styled from "styled-components";

const StyledFeatures = styled.section`
  width: 1000px;
  margin: 0px auto;
  padding: 100px 0px;
`;

export default function Features() {
  console.log("data", features);

  return (
    <StyledFeatures id="projects-section">
      <h2 className="numbered-heading">Featured Projects</h2>
      <div className="">
        <h4>This is features section</h4>
      </div>
    </StyledFeatures>
  );
}
