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
                type: USUARIO.NOME_USUARIO,
                payload: res
            }),   
            dispatch({
                type: USUARIO.SENHA_USUARIO,
                payload: 'res'
            })   
        )
        .catch(error =>
         console.log('$ Erro - ', error),
         dispatch({
            type: USUARIO.NOME_USUARIO,
            payload: user.nome
        }),   
        dispatch({
            type: USUARIO.SENHA_USUARIO,
            payload: user.senha
        }) 
        )
    }
  }

