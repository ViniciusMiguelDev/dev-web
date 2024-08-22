// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao'
});

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: 'Livia', idade: 22 };
Object.seal(pessoa);
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 25;
console.log(pessoa);

// Object.freeze = selado + valores constantes