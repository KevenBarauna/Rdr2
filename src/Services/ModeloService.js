import axios from "axios";

//const API_HOST = process.env.REACT_APP_API_SERVER;

export const ModeloService = () => {
  console.log('$ Service')
  axios.get('https://api.github.com/users/KevenBarauna')
  .then(function(response){
    console.log(response.data);
    console.log(response.status); 
    return response
  });
  return null
};

export default {
  ModeloService,
};
