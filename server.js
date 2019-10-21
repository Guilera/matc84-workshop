const express = require("express");
const uuid = require("uuid/v4");

const app = express();

app.use(express.json());
app.set("json spaces", 2);

app.get("/", (req, res) => res.json("Hello World"));

const students = [];
const classes = [];

app.get("/students", (req, res) => {
    if (!req.query) {
        res.json(students);
    } else {
        const filter = students.filter(x => Object.keys(req.query).reduce((acc, v) => acc && x[v] == req.query[v], true));
        res.json(filter);
    }
});

app.post("/students", (req, res) => {
    
    const newStudent = {
        ...req.body.student,
        id: uuid()
    };

    students.push(newStudent);

    res.json(newStudent);
});

app.get("/students/:id", (req, res) => {
    const student = students.find(x => x.id === req.params.id);
    res.json(student);
});

app.put("/students/:id", (req, res) => {
    const index = students.findIndex(x => x.id === req.params.id);
    students[index] = {
        ...students[index],
        ...req.body.student
    }

    res.json(students[index]);
});

app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(x => x.id === req.params.id);

    if (index === -1) {
        res.status(404).json("Student not found");
    } else {
        students.splice(index, 1);
        res.json("Student deleted with success");
    }
});

app.get("/classes/", (req, res) => res.json(classes));

app.post("/classes/", (req, res) => {
    const newClass = {
        ...req.body.class,
        students: []
    };

    classes.push(newClass);
    res.json(newClass);
});

app.get("/classes/:id/students", (req, res) => {
    const c = classes.find(x => x.id === req.params.id);
    const s = c.students.map(x => students.find(y => y.id === x));

    res.json(s);
});

app.put("/classes/:id", (req, res) => {
    const c = classes.find(x => x.id === req.params.id);
    c.students.push(...req.body.students);
    res.json(c.students);
});

app.use("/*", (req, res) => res.status(404).json("invalid url"));

app.listen(8000, () => console.log("listening on port 8000"));