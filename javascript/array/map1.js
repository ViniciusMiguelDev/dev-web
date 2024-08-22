const nums = [1, 2, 3, 4, 5];

//For com proposito
let resultado = nums.map(function(e) {
    return e * 2
});

console.log(resultado);

const soma10 = e => e + 10
let mais10 = nums.map(soma10);
console.log(mais10);

const triplo = e => e * 3;
let vezes3 = nums.map(soma10);
console.log(vezes3);

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
let dinheiro = nums.map(paraDinheiro);
console.log(dinheiro);

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);