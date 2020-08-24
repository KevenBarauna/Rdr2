import { combineReducers } from 'redux';

import modeloReducer from "./ModeloReducer";

export default combineReducers({
    modeloReducer: modeloReducer,
})