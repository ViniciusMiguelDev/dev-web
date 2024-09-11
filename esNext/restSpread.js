// Operador ... rest (juntar) /spread (espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = { nome: "Vinicius", salario: 720 };
const clone = { ativo: true, ...funcionario };
console.log(clone);
console.log(funcionario);

// usar spread com array
const grupoA = ["Joao", "Peddro", "Gloria"];
const grupoFinal = ["Maria", "Rafaela", ...grupoA];

console.log(grupoFinal);
