import React from "react";
import "./header-with-navigation.scss";
import { ReactComponent as CloseIcon } from "../../../../../assets/icons/common/icon-close.svg";
import cn from "classnames";
export interface HeaderWithNavigationProps {
  title: string;
  description?: string;
  onClose: () => void;
  className?: string;
}

function HeaderWithNavigation(props: HeaderWithNavigationProps) {
  return (
    <div className={cn("header-with-navigation back", props.className)}>
      <div className="header-with-navigation_action-block" />
      <div className="header-with-navigation_texts">
        <h2 className="header-with-navigation_title text">{props.title}</h2>
        <span className="header-with-navigation_title text">
          {props.description}
        </span>
      </div>
      <div className="header-with-navigation_action-block">
        <button
          onClick={props.onClose}
          className="header-with-navigation_close"
          title="Close"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
export const HeaderWithNavigationComponent = React.memo(HeaderWithNavigation);
