import axios from "axios";

const API_HOST = process.env.REACT_APP_API_SERVER;

export const ExemploPost = (item) => {
    axios({
      method: "POST",
      url: `${API_HOST}/meuTeste/testePost`,
      headers: { "content-type": "application/json",},
      data: JSON.stringify(item),
    })
    .then(() => {
        resolve(response);
      })
      .catch(error => reject(error));
};

export const ExemploGetSemItem = () => {
    axios({
      method: "GET",
      url: `${API_HOST}/meuTeste/testeGetSemParametro`,
      headers: { "content-type": "application/json",},
    })
    .then(() => {
        resolve(response);
      })
      .catch(error => reject(error));
};

export const ExemploGetComItem = (item) => {
    axios({
      method: "GET",
      url: `${API_HOST}/meuTeste/testeGetSemParametro?item=${item}`,
      headers: { "content-type": "application/json",},
    })
    .then(() => {
        resolve(response);
      })
      .catch(error => reject(error));
};

export default {
    ExemploPost,
    ExemploGetSemItem,
    ExemploGetComItem,
};
