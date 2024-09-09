// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(7, 8));

const maisCinco = (a) => a + 5;
console.log(maisCinco(3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro default
function log(texto = "Node") {
  console.log(texto);
}
log(null);
log(undefined);
log();
log("Sou mais forte");

// operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(total(1, 2, 3, 4, 5));
