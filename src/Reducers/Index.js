import { combineReducers } from 'redux';

import usuarioReducer from './UsuarioReducer';

export default combineReducers({
    usuarioReducer: usuarioReducer,
})