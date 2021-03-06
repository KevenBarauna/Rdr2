import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import Util from './../../Helpers/Util';
import linkRota from './../../Helpers/Const/Links';
import usuarioAction from './../../Action/UsuarioAction'

const Login = (props) => {
    const dispatch = useDispatch();

    const [nomeUsuario, setnomeUsuario] = useState([]);
    const [senhaUsuario, setsenhaUsuario] = useState([]);

    function onSubmit() {
        if (nomeUsuario === ' ' || nomeUsuario.length === 0) {
            alert('Informe o nome de usuário')
        }
        else if (senhaUsuario === ' ' || senhaUsuario.length === 0) {
            alert('Informe a sua senha')
        } else {
            dispatch(usuarioAction.buscarDadosUsuario({ nome: nomeUsuario, senha: senhaUsuario }))
        }
    }

    return (
        <div className='login-fundo'>

            <div className='login-container'>
                <Form className='login-form'>
                    <Form.Label className='login-titulo'>Login</Form.Label>
                    <Form.Group controlId="formBasicEmail" style={{ marginBottom: '30px' }}>
                        <Form.Control
                            size="lg"
                            type="email"
                            placeholder="E-mail"
                            onChange={(event) => setnomeUsuario(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            size="lg"
                            type="password"
                            placeholder="Senha"
                            onChange={(event) => setsenhaUsuario(event.target.value)}
                        />
                    </Form.Group>

                    <Row>
                        <Form.Group controlId="formBasicCheckbox" style={{ marginLeft: 'auto' }}>
                            <Form.Label style={{ textAlign: 'end' }}>Esqueceu sua senha?</Form.Label>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Continuar conectado" />
                    </Form.Group>

                    <Button variant="primary" size="lg" block onClick={onSubmit}>
                        Entrar
                    </Button>

                    <Row style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Form.Group controlId="formBasicCheckbox" style={{ width: '100%' }}>
                            <Form.Label className='login-criar-conta'>Novo no {Util.NOME_PROJETO}? <Link to={linkRota.criarConta}>Inscreva-se agora.</Link></Form.Label>
                        </Form.Group>
                    </Row>

                </Form>
            </div>
        </div>
    );
}

export default Login;