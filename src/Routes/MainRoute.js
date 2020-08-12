import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ComponentTopo from './../Components/Topo/Topo';
import ComponentFooter from './../Components/Footer/Footer';

import Home from './../View/Home';
import Page404 from './../View/Page404';
import Login from './../View/Login';
import Armas from './../View/Armas';

const MainRoute = () => (
    < BrowserRouter >
        <ComponentTopo />
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/armas' component={Armas} />
            <Route path='/404' component={Page404} />
            <Redirect to='/404' />
        </Switch>
        <ComponentFooter />
    </BrowserRouter >
);

export default MainRoute;