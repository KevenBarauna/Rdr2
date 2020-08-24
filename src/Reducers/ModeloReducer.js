import {TESTE} from './../Helpers/Const/ActionType';

const INITIAL_STATE = {
    meuValordoGet: 1,
    meuValordoPost: 1,
};

  export default function ModeloReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case TESTE.TESTE_GET:
        return {
          ...state,
          meuValordoGet: action.payload.data
        };
        case TESTE.TESTE_POST:
        return {
          ...state,
          meuValordoPost: action.payload.data
        };
      default:
        return state;
    }
  };