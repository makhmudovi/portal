// import { Config } from "../config";
// import axios from 'axios';

// const URL = Config.BASE_URL;
// export function GetData(endpoint, token) {
//     return axios.get(`${URL + endpoint}`, {
//         headers: {
//             "Authorization": 'Bearer ' + token,
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         params: {
//             api_key: '8d08d31e1b08de961a19e2ae293de867'
//         }
//     })
//         .then((response) => {
//             return response.json();
//         })
// }