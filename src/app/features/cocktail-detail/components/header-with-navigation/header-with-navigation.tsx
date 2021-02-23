import React from "react";
import "./header-with-navigation.scss";

export interface HeaderWithNavigationProps {
  title: string;
  description?: string;
  onClose: () => void;
}

function HeaderWithNavigation(props: HeaderWithNavigationProps) {
  return (
    <div className="header-with-navigation back">
      <h2 className="header-with-navigation_title text">{props.title}</h2>
      <button onClick={props.onClose} className="header-with-navigation_close">
        Close
      </button>
    </div>
  );
}
export const HeaderWithNavigationComponent = React.memo(HeaderWithNavigation);
