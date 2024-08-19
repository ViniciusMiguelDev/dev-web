let dobro = function () {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; // Return implicito

console.log(dobro(Math.PI));

let ola = function () {
  return "ola";
};
ola = () => "Ola";
console.log(ola());
