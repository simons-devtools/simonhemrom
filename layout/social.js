import { socials } from "../configs";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledSocialList = styled.div`
  position: fixed;
  left: 50px;
  bottom: -10px;
  .social-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background: var(--light-slate);
    }

    li {
      &:last-of-type {
        margin-bottom: 20px;
      }

      a {
        padding: 10px;

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
  }
`;

export default function Social() {
  return (
    <StyledSocialList>
      <ul className="social-items">
        {socials &&
          socials.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </StyledSocialList>
  );
}
