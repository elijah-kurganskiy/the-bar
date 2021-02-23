import React from "react";
import { RouteProps, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./bottom-modal-route.scss";

interface BottomModalRouteProps extends RouteProps {
  children: React.ReactNode;
}

export class BottomModalRoute extends React.PureComponent<BottomModalRouteProps> {
  constructor(props: BottomModalRouteProps) {
    super(props);
    this.renderRoute = this.renderRoute.bind(this);
  }

  private renderRoute = ({ match }: { match: null }) => {
    return (
      <CSSTransition
        in={match !== null}
        appear={true}
        exit={true}
        timeout={200}
        classNames="bottom-modal"
        unmountOnExit={true}
      >
        {this.props.children}
      </CSSTransition>
    );
  };

  public render(): React.ReactNode {
    const { ...rest } = this.props;
    return <Route {...rest}>{this.renderRoute}</Route>;
  }
}
