import React, { useContext } from "react";
import { AppContext } from "../state/PageWrapper";
import { useScrollFreeze } from "../hooks";

const NavWrapper = () => {
  const { isMenuOpen } = useContext(AppContext);
  if (!isMenuOpen) return null;
  return <Nav />;
};

const Nav = () => {
  const { toggleMenu } = useContext(AppContext);
  useScrollFreeze();

  return (
    <nav
      style={{
        background: "var(--black)",
        color: "white",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        left: 0,
        right: 0,
      }}
    >
      <h1>Hello Nav</h1>
      <button onClick={toggleMenu}>Close Nav</button>
    </nav>
  );
};

export default NavWrapper;
