import Link from "next/link";
import styled from "styled-components";
import { Icon } from "../configs/icons";

const StyledFooter = styled.div`
  padding: 25px 0px;
  text-align: center;
  font-family: monospace;
  font-size: var(--fz-xs);
  color: var(--light-slate);
  a:hover {
    color: var(--green) !important;
    transition: var(--transition);
  }
  span {
    margin: 0px 10px;
    svg {
      width: 15px;
      height: 15px;
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
          <div>Designed & Built by Simon Hemrom</div>
          <div className="github-info">
            <span>
              <Icon name="Star" /> 4,784
            </span>
            <span>
              <Icon name="Fork" /> 2,187
            </span>
          </div>
        </a>
      </Link>
    </StyledFooter>
  );
}
