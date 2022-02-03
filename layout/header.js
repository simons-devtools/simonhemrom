import Image from "next/image";
import { media } from "../public";

const Header = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px 0px" }}>
      <Image src={media.icon} width="150px" height="150px" alt="" />
      <h1>Welcome to Next Programming</h1>
    </div>
  );
};

export default Header;
