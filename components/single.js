import styled from "styled-components";

const StyledSingle = styled("div")`
  width: 380px;
  height: 210px;
  padding: 5px 10px;
  margin-bottom: 30px;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  &:hover {
    color: blue;
    border: 1px solid blue;
  }
`;

const Single = ({ article }) => {
  const { title, body } = article;

  return (
    <StyledSingle>
      <h4>{title} &rarr;</h4>
      <p>{body}</p>
    </StyledSingle>
  );
};

export default Single;
