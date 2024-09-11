let p = new Promise((resolve, reject) => {
  resolve({ x: 3, y: 4 });
});

p.then(function (valor) {
  console.log(valor);
  console.log(valor.x);
  console.log(valor.y);
});

p.then((v) => console.log(v));

let nomes = new Promise((resolve, reject) => {
  resolve(["Vinicius", "Livia", "Mariana", "Danilo"]);
});

nomes.then((nome) => console.log(nome[0]));
nomes.then((nome) => nome[0]).then((letra) => console.log(letra[0]));

nomes.then((nome) => console.log(nome[(0, 1)]));
nomes.then((nome) => nome[(0, 1)]).then((letra) => console.log(letra[0]));