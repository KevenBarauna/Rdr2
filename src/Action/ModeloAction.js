import { TESTE } from './../Helpers/Const/ActionType';
import Service from './../Services/ModeloService';

const exemploPost = (item) => dispatch => {
    //dispatch(startLoading(LOADING_IDENTIFICATOR));
    Service.ExemploPost()
        .then(response => {
            dispatch({
                type: TESTE.TESTE_POST,
                payload: response.data,
            });
        })
        .catch(error => console.log(error))
        // .finally(() => {
        //     dispatch(endLoading(LOADING_IDENTIFICATOR));
        // });
};