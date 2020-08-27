import { USUARIO } from './../Helpers/Const/ActionType';
import { LOCAL_STORAGE } from './../Helpers/Const/Sotarege';
import linkRota from './../Helpers/Const/Links';
import axios from "axios";


const API_HOST = process.env.REACT_APP_API_SERVER;
const WEB_HOST = process.env.REACT_APP_WEB_SERVER;

export const buscarDadosUsuario =(user) => {
    return (dispatch) => {
        axios({
        method: "POST",
        url: `${API_HOST}/https://api.github.com/users/KevenBaraunaTesteAPI404`,
        headers: { "content-type": "application/json", },
        data: JSON.stringify(user),
        })
        .then(res => 
            dispatch({
                type: USUARIO.USER,
                payload: res.data
            }),
        )
        .catch(error =>
            salvarUsuarioStorage(user),
            dispatch({
                type: USUARIO.USER,
                payload: {nome: user.nome, senha: user.senha, token: 'TOKENTESTEMOCK', id: '1'}
            }),
            window.location.href =  `${WEB_HOST}${linkRota.home}`
        )
    }
}

export const salvarUsuarioStorage = (user) => {
    localStorage.setItem(LOCAL_STORAGE.usuario, JSON.stringify({nome: user.nome, senha: user.senha, token: 'TOKENTESTEMOCK', id: '1'}))
}
export const removerUsuarioStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE.usuario);
    return (dispatch) => {
        dispatch({
            type: USUARIO.USER,
            payload: null
        }) 
    }
}

