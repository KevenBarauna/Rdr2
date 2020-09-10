import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import link from './../Helpers/Const/Links';
import Util from './../Helpers/Util';
import ComponentTopo from './../Components/Topo/Topo';
import ComponentFooter from './../Components/Footer/Footer';

import Home from './../View/Home/Home';
import Page404 from './../View/Page404/Page404';
import Login from './../View/Login/Login';
import Armas from './../View/Armas/Armas';
import Dicas from './../View/Dicas/Dicas';
import Roupas from './../View/Roupas/Roupas';

class MainRoute extends React.Component {

    render() {
        return (
            < BrowserRouter >
                <ComponentTopo usuario={this.props.user} />
                {Util.setTitle}
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path={link.home} component={Home} />
                    <Route path={link.login} component={Login} />
                    <Route path={link.armas} component={Armas} />
                    <Route path={link.dicas} component={Dicas} />
                    <Route path={link.roupas} component={Roupas} />
                    <Route path={link.pageNotFound} component={Page404} />
                    <Redirect to={link.pageNotFound} />
                </Switch>
                <ComponentFooter />
            </BrowserRouter >
        );
    }

};

const mapStateToProps = (state) => ({
    user: state.usuarioReducer.usuario
});

export default connect(
    mapStateToProps,
    {

    })(MainRoute);