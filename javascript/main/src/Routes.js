import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Strings from "./core/Strings";
import { Menu } from "./core/Menu";
import Arrays from "./core/Arrays";
import Objects from "./core/Objects";

const Routes = () => {
  return (
    <div className="d-flex" id="wrapper">
      <BrowserRouter>
        <Menu />

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="sidebar-heading text-success">
              JavaScript Playground
            </div>
          </nav>

          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={Strings} />
              <Route path="/arrays" exact component={Arrays} />
              <Route path="/objects" exact component={Objects} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
