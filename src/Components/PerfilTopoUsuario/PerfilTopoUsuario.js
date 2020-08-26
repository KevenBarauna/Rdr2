import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './PerfilTopoUsuario.css';
import { removerUsuarioStorage } from './../../Action/UsuarioAction';

const PerfilTopoUsuario = (props) => {
    const dispatch = useDispatch();
    const {
        usuario, 
    } = props;

    const removerUser = useCallback(() => {
        dispatch( removerUsuarioStorage());
    })

    return (
        <>
            {usuario !== null && usuario !== undefined ? (
              <Dropdown>
              <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className='PerfilTopoUsuario-Accordion'>
                 <p className='PerfilTopoUsuario-nome'>{usuario.nome}</p>
              </Dropdown.Toggle>
            
              <Dropdown.Menu>
                <Dropdown.Item href="/404">Perfil</Dropdown.Item>
                <Dropdown.Item onClick={removerUser}>Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ):(
                <Link to='/login'>
                <Button variant="outline-danger">Login</Button>{' '}
             </Link>
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    usuario: state.usuarioReducer.usuario 
});
  
export default connect(
    mapStateToProps,
    {
        removerUsuarioStorage,
    })(PerfilTopoUsuario);