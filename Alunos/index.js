const express = require("express");
const { findByNome, findByMedia, addAluno, deleteAluno, attAluno } = require("./alunos");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/alunos", (req, res) => {
  const { nome, media } = req.query;
  if (nome) return res.json(findByNome(nome));
  if (media) return res.json(findByMedia(media));
  const alunos = fs.readFileSync('./db.json');
  res.json(JSON.parse(alunos.toString()));
});

app.post("/alunos", (req, res) => {
  addAluno(req, res);
});

app.delete("/alunos/:index", (req, res) => {
  deleteAluno(req, res);
});

app.put("/alunos/:index", (req, res) => {
  attAluno(req, res);
})

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000/"));
