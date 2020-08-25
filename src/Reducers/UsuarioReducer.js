import {USUARIO} from './../Helpers/Const/ActionType';

const INITIAL_STATE = {
    usuario: [],
};

  export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case USUARIO.USER:
        return {
          ...state,
          usuario: action.payload
        };
      default:
        return state;
    }
  };