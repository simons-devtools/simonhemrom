import Image from "next/image";
import { navmenus } from "../configs";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100px;
  padding: 0px 50px;
  display: block;
  background: var(--light-navy);
  box-shadow: var(--navy-shadow);
  transition: var(--transition);
  .navbar-content {
    height: 100px;
    ${({ theme }) => theme.mixins.flexBetween}
    .left-content {
      flex-basis: 44%;
    }
    .right-content {
      flex-basis: 48%;
      text-align: end;
      ul {
        display: inline-block;
        li {
          display: inline-block;
          margin-right: 30px;
          letter-spacing: 2px;
          font-size: var(--fz-xxs);
          counter-increment: item 1;
          &::before {
            content: "0" counter(item) ".";
            display: inline-block;
            margin-right: 5px;
            color: var(--green);
            font-size: var(--fz-xxs);
          }
          @media screen and (max-width: 768px) {
            margin: 0 0 40px 0;
            font-size: var(--fz-md);
            &::before {
              display: block;
              margin-right: 0px;
              font-size: var(--fz-xs);
              text-align: center;
            }
          }
        }
      }
      .resume-btn {
        ${({ theme }) => theme.mixins.smallButton}
      }

      @media screen and (max-width: 768px) {
        display: ${(props) => (props.openMenu ? "flex" : "none")};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        width: 75%;
        height: 100%;
        padding-top: 30px;
        background: var(--lightest-navy);
        transition: var(--transition);
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
`;

export default function Navbar() {
  // console.log("data", navmenus, profile);
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <StyledNavbar id="navbar" openMenu={false}>
      <div className="navbar-content">
        <div className="left-content">
          <Image
            src="/icons/logo.png"
            width={40}
            height={40}
            quality={80}
            alt="logo-img"
            priority
          />
        </div>

        <div className="right-content">
          <ul>
            {navmenus &&
              navmenus.map(({ menuName, menuId }, index) => (
                <li key={index}>
                  <a href={menuId}>{menuName}</a>
                </li>
              ))}
          </ul>
          <a
            href="https://drive.google.com/file/d/1KQ4j09aVzNMBI43rl2ueOpMwht8GQZEs/view?usp=sharing"
            target="_blank"
            rel="noopenner noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </StyledNavbar>
  );
}
