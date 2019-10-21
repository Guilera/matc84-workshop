const { api, logS, logE } = require(".");

const deleteStudent = id => api.delete(`/students/${id}`);

deleteStudent("e7a965c5-7453-4db6-884e-5e8d9728eb2e")
.then(x => console.log(x.data))
.catch(logE);