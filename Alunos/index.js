const express = require("express");
const { alunos, findByNome, findByMedia } = require("./alunos")

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
  (!nome || !matricula || !media) ? res.status("404").json({ message: "Informações incorretas ou incompleta" }) : alunos.push({ nome: nome, matricula: matricula, media: media });
  res.status("201").json({ message: "Aluno cadastrado" });
})

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000/"))