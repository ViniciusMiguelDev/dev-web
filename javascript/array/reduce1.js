const alunos = [
    { nome: 'Vinicius', nota: 7.3, bolsita: false},
    { nome: 'Livia', nota: 9.2, bolsita: true},
    { nome: 'Mariana', nota: 9.8, bolsita: false},
    { nome: 'Danilo', nota: 8.7, bolsita: true}
];

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0/*Valor inicial*/);

console.log(resultado);