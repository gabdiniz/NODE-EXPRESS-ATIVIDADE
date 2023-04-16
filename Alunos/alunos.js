const fs = require("fs");

const alunos = [
  {
    nome: "Ruan",
    media: "7.8"
  },
  {
    nome: "Victor",
    media: "7.7"
  },
  {
    nome: "Matheus",
    media: "8"
  },
  {
    nome: "Edmar",
    media: "7.7"
  },
  {
    nome: "Gabriel",
    media: "6.8"
  },
]

function addAluno(req, res) {
  const { nome, matricula, media } = req.body;
  if (!nome || !matricula || !media) return res.status(400).json({ message: "Informações incorretas ou incompleta" })
  alunos.push({ nome: nome, matricula: matricula, media: media });
  res.status(201).json({ message: "Aluno cadastrado" });
  fs.writeFileSync("./db.json", JSON.stringify(alunos));
}

function deleteAluno(req, res) {
  const { index } = req.params;
  if (!index) return res.status(400).json({ message: "Insira um index" });
  if (isNaN(index)) return res.status(400).json({ message: "O index deve ser do tipo numérico" });
  if (index >= alunos.length) return res.status(404).json({ message: `Não existe aluno no index: ${index}` });
  alunos.splice(index, 1);
  fs.writeFileSync("./db.json", JSON.stringify(alunos));
  res.status(201).json({ message: "Aluno removido" });
}

function attAluno(req, res) {
  const { index } = req.params;
  const { nome, media } = req.body;
  if (!index) return res.status(400).json({ message: "Insira um index" });
  if (isNaN(index)) return res.status(400).json({ message: "O index deve ser do tipo numérico" });
  if (!nome || !media) return res.status(400).json({ message: "Informações incorretas ou incompleta" });
  if (index >= alunos.length) return res.status(404).json({ message: `Não existe aluno no index: ${index}` });
  alunos[index] = ({ nome: nome, media: media });
  fs.writeFileSync("./db.json", JSON.stringify(alunos));
  res.status(201).json({ message: "Aluno atualizado" });
}

function findByNome(nome) {
  if (nome) return alunos.filter((user) => user.nome.toLowerCase() == nome.toLowerCase());
}
function findByMedia(media) {
  if (media) return alunos.filter((user) => user.media == media);
}

module.exports = { alunos, findByNome, findByMedia, addAluno, deleteAluno, attAluno };



