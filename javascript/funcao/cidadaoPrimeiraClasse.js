// Funcao em Js e First Class Object (Citizens)
//Higher-order function

// Criar de forma literal
function fun1() {};

// Armazenar em uma variavel
const fun = function () {};

// Armazenar em um array
const array = [function (a, b) {}];

// Armazenar em uma tributo de objeto
const obj = {};
obj.falar = function () {};
console.log(obj.falar());

// Passar funcao como parametro
function run(fun) {};
run(function(){console.log('Executando...')});

// Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    };
};

soma(1,2)(3);