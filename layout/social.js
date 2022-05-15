import Link from "next/link";
import { Icon } from "../configs/icons";
import { socials } from "../configs";
import styled from "styled-components";

const StyledSocial = styled.div`
  position: fixed;
  bottom: -3%;
  text-align: center;
  &::after {
    content: "";
    width: 2.5px;
    height: 90px;
    margin-left: 15px;
    display: inline-block;
    background: var(--light-slate);
  }
  .social-icon {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0px 0px 30px 15px;
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
