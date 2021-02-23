import React from "react";
import "./header.scss";

function Header() {
  return (
    <header className="header back">
      <h1 className="header-title text">The Bar’s Menu</h1>
    </header>
  );
}

export const HeaderComponent = React.memo(Header);
