import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import linkRota from './../../../Helpers/Const/Links';
import './PerfilTopoUsuario.css';
import usuarioAction from './../../../Action/UsuarioAction';

const PerfilTopoUsuario = (props) => {
    const dispatch = useDispatch();

    const usuario = useSelector(
        state => state.usuarioReducer.usuario
    );

    const removerUser = () => {
        dispatch(usuarioAction.removerUsuarioStorage());
    }

    return (
        <>
            {usuario !== null && usuario !== undefined ? (
                <Dropdown>
                    <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className='PerfilTopoUsuario-Accordion'>
                        <p className='PerfilTopoUsuario-nome'>{usuario.nome}</p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href={linkRota.perfil}>Perfil</Dropdown.Item>
                        <Dropdown.Item onClick={removerUser}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                    <Link to={linkRota.login}>
                        <Button variant="outline-danger">Login</Button>{' '}
                    </Link>
                )}
        </>
    );
}

export default (PerfilTopoUsuario);