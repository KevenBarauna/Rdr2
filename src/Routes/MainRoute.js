import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './../App';
import Page404 from './../Components/Page404/Page404';

const MainRoute = () => (
    < BrowserRouter >
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/home' component={App} />
            <Route path='/404' component={Page404} />
            <Redirect to='/404' />
        </Switch>
    </BrowserRouter >
);

export default MainRoute;