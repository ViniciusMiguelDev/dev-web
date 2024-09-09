const alunos = [
    { nome: 'Vinicius', nota: 7.3, bolsista: false},
    { nome: 'Livia', nota: 9.2, bolsista: true},
    { nome: 'Mariana', nota: 9.8, bolsista: false},
    { nome: 'Danilo', nota: 8.7, bolsista: true}
];

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));