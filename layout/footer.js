import Link from "next/link";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledFooter = styled.div`
  width: 20%;
  margin: 30px auto;
  text-align: center;
  .one {
    display: block;
  }
  small {
    font-family: monospace;
    color: var(--light-slate);
    margin: 0px 10px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
  &:hover {
    small {
      color: var(--green) !important;
      transition: var(--transition);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Link href="/" target="_blank" passHref>
        <a className="">
          <small className="one">Designed & Built by Simon Hembrom</small>
          <small>
            <Icon name="Star" /> 24,874
          </small>
          <small>
            <Icon name="Fork" /> 48,952
          </small>
        </a>
      </Link>
    </StyledFooter>
  );
}
