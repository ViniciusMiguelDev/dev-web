const pai = { nome: 'Pedro', corCaberlo: 'preto' };

const filha1 = Object.create(pai);
filha1.nome = 'Livia';
console.log(filha1.corCaberlo);

const filha2 = Object.create(pai, {
    nome: { value: 'Mariana', writable:false, enumerable: true }
});

console.log(filha2.nome);
filha2.nome = 'Abacate';
console.log(`${filha2.nome} tem cabelo ${filha2.corCaberlo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por heranca`)
};