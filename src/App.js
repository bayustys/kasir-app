import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Home, Success } from "./pages";

export default class App extends Component {
  render() {
    <link rel="stylesheet" href="./index.css"></link>;
    return (
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/success" component={Success} exact />
        </Switch>
      </div>
    );
  }
}
