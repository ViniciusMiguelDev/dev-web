// nao aceita repeticao / nao indexada
const barbies = new Set();
barbies.add("Vinicius");
barbies.add("Livia");
barbies.add("Mariana").add("Danilo");
barbies.add("Vinicius");

console.log(barbies);
console.log(barbies.size);
console.log(barbies.has("vinicius"));
console.log(barbies.has("Vinicius"));
barbies.delete("Danilo");
console.log(barbies);

const nomes = ["Vinicius", "Miguel", "Ferreira", "Ariel", "Silva", "Vinicius"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
