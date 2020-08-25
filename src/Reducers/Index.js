import { combineReducers } from 'redux';

import modeloReducer from './ModeloReducer';
import usuarioReducer from './UsuarioReducer';

export default combineReducers({
    modeloReducer: modeloReducer,
    usuarioReducer: usuarioReducer,
})