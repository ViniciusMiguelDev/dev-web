// pessoa -> 123 -> {...};
const Pessoa = { nome: 'Vinicius' };
Pessoa.nome = 'Livia';
console.log(Pessoa);

// Pessoa -> 456 -> { ... };
// Pessoa = { nome: 'Miguel' }; -> ERRO!!!!!!!!

Object.freeze(Pessoa);

Pessoa.nome = 'Santos';
console.log(Pessoa.nome);

const pessoaConstante = Object.freeze({ nome: 'Abacate' });
console.log(pessoaConstante);