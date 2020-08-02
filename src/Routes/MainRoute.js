import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './../View/Home';
import Page404 from './../View/Page404';

const MainRoute = () => (
    < BrowserRouter >
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} />
            <Route path='/404' component={Page404} />
            <Redirect to='/404' />
        </Switch>
    </BrowserRouter >
);

export default MainRoute;