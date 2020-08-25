import {USUARIO} from './../Helpers/Const/ActionType';

const INITIAL_STATE = {
    usuario: [],
    nomeUsuario: null,
    senhaUsuario: null,
};

  export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case USUARIO.NOME_USUARIO:
        return {
          ...state,
          nomeUsuario: action.payload
        };
        case USUARIO.SENHA_USUARIO:
        return {
          ...state,
          nomeUsuario: action.payload
        };
      default:
        return state;
    }
  };