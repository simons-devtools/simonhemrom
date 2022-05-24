import { profile } from "../configs";
import styled from "styled-components";

const StyledLinkWrapper = styled.div`
  position: fixed;
  right: 50px;
  bottom: -10px;

  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background: var(--slate);
  }

  a {
    margin-bottom: 30px;
    font-size: var(--fz-xxs);
    color: var(--light-slate);
    writing-mode: vertical-rl;
    letter-spacing: 2px;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

export default function Email() {
  return (
    <StyledLinkWrapper>
      <a href={`mailto:${profile.email}`} rel="noreferrer">
        {profile.email}
      </a>
    </StyledLinkWrapper>
  );
}
