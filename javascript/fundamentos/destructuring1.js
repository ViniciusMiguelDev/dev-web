const pessoa = {
    nome: "Livia",
    idade: 22,
    endereco: {
        logradouro: "av São paulo",
        numero: 305
    }
};

const { nome, idade } = pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);