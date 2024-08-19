function criarPessoa (nome, sobrenome, idade) {
    let pessoa = {
        nome,
        sobrenome,
        idade
    };
    return pessoa
};

console.log(criarPessoa('Vinicius', 'Miguel', 22));