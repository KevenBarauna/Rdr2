import { USUARIO } from './../Helpers/Const/ActionType';
import { LOCAL_STORAGE } from './../Helpers/Const/Sotarege';
//import linkRota from './../Helpers/Const/Links';
import usuarioService from './../Services/UsuarioService';

//const WEB_HOST = process.env.REACT_APP_WEB_SERVER

const buscarDadosUsuario = (user) => dispatch => {
    usuarioService.buscarDadosUsuario()
        .then(response => {
            // dispatch({
            //     type: USUARIO.USER,
            //     payload: response.data
            // });
        })
        .catch(erro => console.log('ERRO: - ', erro))
        .finally(
            localStorage.setItem(LOCAL_STORAGE.usuario, JSON.stringify({ nome: user.nome, token: 'TOKENTESTEMOCK', id: '1' })),
            dispatch({
                type: USUARIO.USER,
                payload: { nome: user.nome, token: 'TOKENTESTEMOCK', id: '1' }
            }),
            //window.location.href = `${WEB_HOST}${linkRota.home}`
        )
}

const removerUsuarioStorage = () => dispatch => {
    localStorage.removeItem(LOCAL_STORAGE.usuario);
    dispatch({
        type: USUARIO.USER,
        payload: null
    })
}


export default {
    buscarDadosUsuario,
    removerUsuarioStorage,
}

