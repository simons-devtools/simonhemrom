import Image from "next/image";
import styled from "styled-components";
import { navmenus, profile } from "../configs";

const StyledNavbar = styled.nav`
  width: 80%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-content {
    flex-basis: 44%;
  }
  .right-content {
    flex-basis: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Navbar() {
  console.log("data", navmenus, profile);

  return (
    <StyledNavbar>
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

      <ol className="right-content">
        {navmenus &&
          navmenus.map(({ menuName }, index) => (
            <li key={index}>{menuName}</li>
          ))}
          <li>
            <button type="button">
              resume
            </button>
          </li>
      </ol>
    </StyledNavbar>
  );
}
