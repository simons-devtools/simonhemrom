import { socials } from "../configs";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledSocialList = styled.ul`
  position: fixed;
  left: 50px;
  bottom: -10px;

  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background: var(--slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px 10px;
      color: var(--light-slate);

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default function Social() {
  return (
    <StyledSocialList>
      {socials &&
        socials.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  );
}
