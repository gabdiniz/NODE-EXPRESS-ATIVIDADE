const express = require("express");
const { alunos, findByNome, findByNota } = require("./alunos")

const app = express();
app.use(express.json());

app.get("/alunos", (req, res) => {
  const { nome, nota } = req.query;
  if (nome) res.json(findByNome(nome));
  if (nota) res.json(findByNota(nota));
  res.json(alunos);
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000/"))