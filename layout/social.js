import Link from "next/link";
import { socials } from "../configs";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledSocial = styled.div`
  position: fixed;
  left: 50px;
  bottom: -1%;
  text-align: center;
  &::after {
    content: "";
    width: 2px;
    height: 90px;
    display: inline-block;
    background: var(--light-slate);
  }
  .social-icon {
    display: block;
    width: 20px;
    height: 20px;
    margin-bottom: 30px;
    &:hover {
      transform: var(--translateY);
      transition: var(--transition);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Social() {
  console.log("socials", socials);

  return (
    <StyledSocial>
      {socials &&
        socials.map(({ name, url }, index) => (
          <Link href={url} key={index} target="_blank">
            <a className="social-icon" aria-label={name}>
              <Icon name={name} />
            </a>
          </Link>
        ))}
    </StyledSocial>
  );
}
