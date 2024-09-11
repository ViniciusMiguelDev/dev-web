for (let letra of "Cod3r") {
  console.log(letra);
}

const nomes = ["Vinicius", "Livia", "Mariana", "Danilo"];

for (let nome of nomes) {
  console.log(nome);
}

for (let i in nomes) {
  console.log(i);
}

console.log("Indice dos nomes");

for (let numero of [1, 2, 3, 4, 5]) {
  console.log(numero);
}

const assuntosMap = new Map([
  ["map", { abordado: true }],
  ["set", { abordado: true }],
  ["promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(`Chave: ${ch} / Valor: ${vl}`);
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}
