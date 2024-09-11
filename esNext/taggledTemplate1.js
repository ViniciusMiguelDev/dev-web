// taggled templates - processa o template dentro de uma funcao

function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra String";
}

const aluno = "Vini";
const situacao = "Aprovado";
console.log(`${aluno} esta ${situacao}`);
console.log(tag `${aluno} esta ${situacao}`);