const { api, logS, logE } = require(".");

const createClass = newClass => api.post("/classes", { class: newClass });

[
    {
        name: "LABORATÓRIO DE PROGRAMAÇÃO WEB",
        id: "MATC84",
        hours: 51,
        department: "Ciência da Computação",
        description: "Estudo das linguagens de programação para Web através da implementação de programas nestas linguagens."
    },
    {
        name: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
        id: "MATA37",
        hours: 68,
        department: "Ciência da Computação",
        description: "Desenvolvimento de algoritmos. Refinamento sucessivo. Noções de especificação e correção de algoritmos. Construção de programas aplicando conceitos de construção de algoritmos: variáveis, constantes, operadores aritméticos e expressões, estruturas de controle (atribuição, sequência, seleção, repetição, recursão). Parâmetros. Princípios de programação estruturada e modular. Documentação de programas. Teste de programas. Análise de resultados."
    },
    {
        name: "TEORIA DOS GRAFOS",
        id: "MATA53",
        hours: 68,
        department: "Ciência da Computação",
        description: "Grafos, grafos simples, subgrafos. Isomorfismo de grafos. Representação computacional. Algoritmos de buscas. Grafos orientados. Trilhas, caminhos e ciclos. Distância. Caminho mínimo. Conectividade de vértices e arestas. Grafos hamiltonianos. Problemas de caixeiro viajante. Grafos eulerianos. Problema do carteiro chinês. Árvores, árvore geradora mínima. Teoria do NP completo. Classes P, NP, NP-completo, NP-Difícil. Reduções polinomiais. Prova de NP-completude. Noções de planaridade. Noções de coloração de vértices. Número cromático. Noções de casamentos. Casamentos perfeitos. Noções de fluxos em redes."
    },
].forEach(createClass);

const addStudents = students => api.put("/classes/MATC84", { students });

api.get("/students")
.then(x => addStudents(x.data.map(s => s.id).slice(0, -1)).then(logS))