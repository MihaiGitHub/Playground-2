import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import { Menu } from './core/Menu';
import SavePost from './core/SavePost';
import Refs from './core/Refs';

const Routes = () => {
    return (
      <div className="d-flex" id="wrapper">
         <BrowserRouter>
          <Menu />

          <div id="page-content-wrapper">
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <div className="sidebar-heading text-success">React Hooks Playground</div>
              </nav>

              <div className="container-fluid">
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/savepost" exact component={SavePost} />
                      <Route path="/refs" exact component={Refs} />
                  </Switch>
              </div>
          </div>
          </BrowserRouter>
      </div>
    );
}

export default Routes;




