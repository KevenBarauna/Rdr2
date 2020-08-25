import { USUARIO } from './../Helpers/Const/ActionType';
import axios from "axios";


const API_HOST = process.env.REACT_APP_API_HOST_URL_GAME;

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
            dispatch({
                type: USUARIO.USER,
                payload: {nome: user.nome, senha: user.senha, token: 'TOKENTESTEMOCK', id: '1'}
            }),
        )
    }
}

