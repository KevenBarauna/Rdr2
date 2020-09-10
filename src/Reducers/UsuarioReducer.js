import { USUARIO } from './../Helpers/Const/ActionType';
import { LOCAL_STORAGE } from './../Helpers/Const/Sotarege';

const INITIAL_STATE = {
  usuario: JSON.parse(localStorage.getItem(LOCAL_STORAGE.usuario)),
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USUARIO.USER:
      console.log(action.payload)
      return {
        ...state,
        usuario: action.payload
      };
    default:
      return state;
  }
};