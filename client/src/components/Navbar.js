import React from "react";
// import logo from "../logo.png"

const NavBar = () => {
  return (
    <div className="navBar">
      {/* <img classname="logo" src={logo} alt="logo"/> */}
      <a href="/">HOME </a>
      <a href="/watchlist">WATCHLIST </a>
      <a href="/history">BROWSING HISTORY </a>
    </div>
  );
};

export default NavBar;
