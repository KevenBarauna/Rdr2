import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import Util from './../../Helpers/Util';

const Login = (props) => {

    return (
        <div className='login-fundo'>

            <div className='login-container'>
                <Form className='login-form'>
                    <Form.Label className='login-titulo'>Login</Form.Label>
                    <Form.Group controlId="formBasicEmail" style={{ marginBottom: '30px' }}>
                        <Form.Control size="lg" type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control size="lg" type="password" placeholder="Password" />
                    </Form.Group>

                    <Row>
                        <Form.Group controlId="formBasicCheckbox" style={{ marginLeft: 'auto' }}>
                            <Form.Label style={{ textAlign: 'end' }}>Esqueceu sua senha?</Form.Label>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Continuar conectado" />
                    </Form.Group>

                    <Button variant="primary" size="lg" block>
                        Entrar
                    </Button>

                    <Row style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Form.Group controlId="formBasicCheckbox" style={{ width: '100%' }}>
                            <Form.Label className='login-criar-conta'>Novo no {Util.NOME_PROJETO}? <Link to='/404'>Inscreva-se agora.</Link></Form.Label>
                        </Form.Group>
                    </Row>

                </Form>
            </div>
        </div>
    );
}

export default Login;