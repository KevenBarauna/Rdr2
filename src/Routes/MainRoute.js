import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './../App';

const MainRoute = () => (
    < BrowserRouter >
        <Switch>
            <Route path='/' component={App} exact />
        </Switch>
    </BrowserRouter >
);

export default MainRoute;