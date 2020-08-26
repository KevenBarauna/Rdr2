import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import ComponentTopo from './../Components/Topo/Topo';
import ComponentFooter from './../Components/Footer/Footer';

import Home from './../View/Home';
import Page404 from './../View/Page404';
import Login from './../View/Login';
import Armas from './../View/Armas';
import Dicas from './../View/Dicas';
import Roupas from './../View/Roupas';

class MainRoute extends React.Component {

    render() {
        return (
            < BrowserRouter >
            <ComponentTopo usuario={this.props.user}/>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/armas' component={Armas} />
                <Route path='/dicas' component={Dicas} />
                <Route path='/roupas' component={Roupas} />
                <Route path='/404' component={Page404} />
                <Redirect to='/404' />
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