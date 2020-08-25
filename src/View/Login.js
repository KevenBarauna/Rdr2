import * as React from 'react';
import { connect } from "react-redux";
import ComponentLogin from './../Components/PageLogin/Login';
import {buscarDadosUsuario} from './../Action/UsuarioAction';

class Login extends React.Component {

    render() {
        return (
            <ComponentLogin 
             action={this.props.buscarDadosUsuario}
            />
        );
    }
}
const mapStateToProps = (state) => ({});
  
export default connect(
    mapStateToProps,
    {
        buscarDadosUsuario,
    })(Login);