import { profile } from "../configs";
import styled from "styled-components";

const StyledEmail = styled.div`
  position: fixed;
  right: 0px;
  bottom: 10px;
  letter-spacing: 2px;
  font-size: var(--fz-xs);
  color: var(--lightest-slate);
  transform: translate(100px, -140px) rotate(90deg);
  &::after {
    content: "";
    width: 90px;
    height: 2px;
    margin: 0 0 2px 30px;
    display: inline-block;
    background: var(--light-slate);
  }
  a {
    font-size: var(--fz-xxs);
    color: var(--lightest-slate);
    &:hover {
      transform: var(--translateX);
      transition: var(--transition);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Email() {
  return (
    <StyledEmail>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </StyledEmail>
  );
}
