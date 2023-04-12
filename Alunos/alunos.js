const alunos = [
  {
    nome: "Ruan",
    nota: "7.8"
  },
  {
    nome: "Victor",
    nota: "7.7"
  },
  {
    nome: "Matheus",
    nota: "8"
  },
  {
    nome: "Edmar",
    nota: "7.7"
  },
  {
    nome: "Gabriel",
    nota: "6.8"
  },
]

function findByNome(nome) {
  if (nome) return alunos.filter((user) => user.nome.toLowerCase() == nome.toLowerCase())
}
function findByNota(nota) {
  if (nota) return alunos.filter((user) => user.nota == nota)
}

module.exports = { alunos, findByNome, findByNota };



