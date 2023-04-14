const express = require("express");
const { alunos, findByNome, findByMedia } = require("./alunos");

const app = express();
app.use(express.json());

app.get("/alunos", (req, res) => {
  const { nome, media } = req.query;
  if (nome) res.json(findByNome(nome));
  if (media) res.json(findByMedia(media));
  res.json(alunos);
});

app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;
  (!nome || !matricula || !media) ? res.status(400).json({ message: "Informações incorretas ou incompleta" }) : alunos.push({ nome: nome, matricula: matricula, media: media });
  res.status(201).json({ message: "Aluno cadastrado" });
})

app.post("/alunos/delete/:index", (req, res) => {
  const { index } = req.params;
  if (!index) res.status(400).json({ message: "Insira um index" });
  if (isNaN(index)) res.status(400).json({ message: "O index deve ser do tipo numérico" });
  if (index >= alunos.length) res.status(404).json({ message: `Não existe aluno no index: ${index}` });
  alunos.splice(index, 1);
  res.status(201).json({ message: "Aluno removido" });
})

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000/"));