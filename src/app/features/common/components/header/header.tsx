import React from "react";
import "./header.scss";
import cn from "classnames";

export interface HeaderProps {
  className?: string;
}

function Header(props: HeaderProps) {
  return (
    <header className={cn("header back", props.className)}>
      <h1 className="header-title text">The Bar’s Menu</h1>
    </header>
  );
}

export const HeaderComponent = React.memo(Header);
