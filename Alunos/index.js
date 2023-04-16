const express = require("express");
const morganBody = require("morgan-body");
const { findByNome, findByMedia, addAluno, deleteAluno, attAluno } = require("./alunos");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const log = fs.createWriteStream(
  path.join(__dirname, "./logs", "express.log"), { flags: 'a' }
)

morganBody(app, {
  noColors: true,
  stream: log
})

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
