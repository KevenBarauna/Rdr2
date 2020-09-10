import axios from "axios";

//const API_HOST = process.env.REACT_APP_API_SERVER;

export const buscarDadosUsuario = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `https://api.github.com/users/KevenBarauna`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                reject(error)
            )
    })
}

export default {
    buscarDadosUsuario,
}
