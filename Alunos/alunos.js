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

function findByNome(nome) {
  if (nome) return alunos.filter((user) => user.nome.toLowerCase() == nome.toLowerCase());
}
function findByMedia(media) {
  if (media) return alunos.filter((user) => user.media == media);
}

module.exports = { alunos, findByNome, findByMedia };



