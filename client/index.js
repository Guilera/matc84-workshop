const axios = require("axios").default;

const api = axios.create({
    baseURL: "http://localhost:8000"
});


const logS = x => console.log({
    status: x.status,
    data: x.data
});

const logE = x => console.log({
    status: x.response.status,
    data: x.response.data
});

module.exports = {
    api,
    logS,
    logS
};