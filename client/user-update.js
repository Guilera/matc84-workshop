const { api, logS, logE } = require(".");

const updateStudent = (id, student) => api.put(`/students/${id}`, { student });

updateStudent("a9631de8-803b-447a-b0e9-eae18f050d02", {
    age: 21,
    name: "Danilo Brito da Silva"
})
.then(logS)
.catch(logE);