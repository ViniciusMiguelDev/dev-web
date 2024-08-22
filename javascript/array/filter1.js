const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
];

console.log(produtos.filter(function(p){
    return p.preco > 2400
}));

const caro = function (p) {
    return p.preco >= 500
};

const fragil = function (p) {
    return p.fragil
};

const resistente = function (p) {
    return p.fragil != true
};

console.log(produtos.filter(caro));
console.log(produtos.filter(fragil));
console.log(produtos.filter(fragil).filter(caro));
console.log(produtos.filter(resistente));