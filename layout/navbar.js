import Link from "next/link";

const navStyles = {
  container: {
    width: "100%",
    backgroundColor: "#000000",
  },
  wrapper: {
    width: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
  },
  items: {
    color: "#ffffff",
    padding: "15px 20px",
  },
};

const Navbar = () => {
  return (
    <div style={navStyles.container}>
      <ul style={navStyles.wrapper}>
        <li style={navStyles.items}>
          <Link href="/">Home</Link>
        </li>

        <li style={navStyles.items}>
          <Link href="/about">About</Link>
        </li>

        <li style={navStyles.items}>
          <Link href="/contact">Contact</Link>
        </li>

        <li style={navStyles.items}>
          <Link href="/article">Articles</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
