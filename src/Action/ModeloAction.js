import { TESTE } from './../Helpers/Const/ActionType';
import axios from "axios";

 export async  function ModeloAction(values){
    const res = await  axios.get('https://api.github.com/users/KevenBarauna')
   .then(function(response){
     console.log(response.data);
     console.log(response.status); 
     return{
      type: TESTE.TESTE_GET, 
      payload: response.status 
   }
   });
 };


 export default {
   ModeloAction,
 };

  