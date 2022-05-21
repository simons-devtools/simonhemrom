import Image from "next/image";
import styled from "styled-components";
import { navmenus, profile } from "../configs";

const StyledNavbar = styled.nav`
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  width: 100%;
  height: var(--nav-height);
  padding: 0px 50px 0px 50px;
  transition: var(--transition);
  box-shadow: var(--navy-shadow);
  .navbar-content {
    height: 100%;
    ${({ theme }) => theme.mixins.flexBetween}
    .left-content {
      flex-basis: 44%;
      svg {
        display: block;
      }
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
        }
      }
      .resume-btn {
        ${({ theme }) => theme.mixins.smallButton}
      }
    }
  }
`;

export default function Navbar() {
  let prevScrollpos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    if (prevScrollpos > currentScrollPos) {
      if (currentScrollPos) {
        navbar.style.top = "0px";
        navbar.style.height = "var(--nav-scroll-height)";
        navbar.style.background = "var(--light-navy)";
      } else {
        navbar.style.height = "var(--nav-height)";
        navbar.style.background = "transparent";
      }
    } else {
      navbar.style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
  };

  return (
    <StyledNavbar id="navbar">
      <div className="navbar-content">
        <div className="left-content">
          <Image
            src="/icons/logo.png"
            width={40}
            height={40}
            quality={100}
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
            href={profile.resume}
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
