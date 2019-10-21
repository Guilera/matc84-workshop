const { api, logS, logE } = require(".");

const createStudent = student => api.post("/students", { student });

[{
    name: "Alan Atta",
    age: 25,
    gender: 'M',
    major: "BCC"
}, {
    name: "Bruno Guilera",
    age: 29,
    gender: 'M',
    major: "BCC"
}, {
    name: "Caio Vinicius",
    age: 26,
    gender: 'M',
    major: "SI"
}, {
    name: "Danilo Brito",
    age: 26,
    gender: 'M',
    major: "BCC"
}, {
    name: "José Vitor",
    age: 27,
    gender: 'M',
    major: "BCC"
}, {
    name: "Larissa Hora",
    age: 25,
    gender: 'F',
    major: "BCC"
}].forEach(s => createStudent(s)
    .then(logS)
    .catch(logE)
);