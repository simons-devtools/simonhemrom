import { socials } from "../configs";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledSocial = styled.div`
  position: fixed;
  left: 50px;
  bottom: -10px;
  text-align: center;
  &::after {
    content: "";
    width: 2px;
    height: 90px;
    display: inline-block;
    background: var(--light-slate);
  }
  a {
    display: block;
    width: 20px;
    height: 20px;
    margin-bottom: 30px;
    &:hover {
      transform: var(--translateY);
      transition: var(--transition);
    }
  }
`;

export default function Social() {
  return (
    <StyledSocial>
      {socials &&
        socials.map(({ name, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopenner noreferrer"
            aria-label={name}
          >
            <Icon name={name} />
          </a>
        ))}
    </StyledSocial>
  );
}
