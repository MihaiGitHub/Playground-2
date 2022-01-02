import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import { Menu } from "./core/Menu";
import SaveData from "./core/SaveData";
import Refs from "./core/Refs";
import LocalStorage from "./core/LocalStorage";
import LargeDataset from "./core/LargeDataset";
import Main from "./core/ContextAPI/Main";

const Routes = () => {
  return (
    <div className="d-flex" id="wrapper">
      <BrowserRouter>
        <Menu />

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="sidebar-heading text-success">
              React Hooks Playground
            </div>
          </nav>

          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/savedata" exact component={SaveData} />
              <Route path="/refs" exact component={Refs} />
              <Route path="/localstorage" exact component={LocalStorage} />
              <Route path="/largedataset" exact component={LargeDataset} />
              <Route path="/contextapi" exact component={Main} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
