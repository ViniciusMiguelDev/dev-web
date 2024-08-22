const pessoa = {
    nome: 'Vinicius',
    idade: 22,
    peso: 60
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable: false,
    value: '18/03/2002'
});

pessoa.dataNascimento = '19/04/2002';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c:3, a: 4 }
const obj = Object.assign(dest, o1, o2);
console.log(obj);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);