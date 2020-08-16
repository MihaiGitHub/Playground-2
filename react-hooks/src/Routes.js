import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import SendRequest from './core/SendRequest';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sendRequest" exact component={SendRequest} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;