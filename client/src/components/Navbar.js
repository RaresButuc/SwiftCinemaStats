import React from "react";

const NavBar = () => {
  return (
    <div>
      <a href="/">Logo</a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/watchlist">Watchlist</a>
        </li>
        <li>
          <a href="/history">Browsing History</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
