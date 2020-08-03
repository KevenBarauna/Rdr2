import * as React from 'react';
import ComponentTopo from './../Components/Topo/Topo';
import ComponentFooter from './../Components/Footer/Footer';
import ComponentLogin from './../Components/PageLogin/Login';


class Login extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <ComponentTopo />
                <ComponentLogin />
                <ComponentFooter />
            </>
        );
    }
}

export default Login;