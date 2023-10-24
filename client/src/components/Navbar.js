import React from "react";
import logo from "../LogoWebsite.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="buttons">
        <a href="/" className="navBarButton">HOME</a>
        <a href="/watchlist" className="navBarButton">WATCHLIST</a>
        <a href="/history" className="navBarButton">BROWSING HISTORY</a>
      </div>
    </div>
  );
};

export default NavBar;
