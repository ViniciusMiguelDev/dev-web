console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Vinicius';
aprovados.push('Livia');
console.log(aprovados.length);

aprovados[9] = 'Miguel';
console.log(aprovados);
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

aprovados.sort()
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);
aprovados.splice(1, 2, 'Elemento1', 'Elemento2'); // Primeiro numero é onde vai começar as modif e o segundo quantos serão modificados!
console.log(aprovados);
aprovados.splice(1, 1, 'Elemento3'); // Primeiro numero é onde vai começar as modif e o segundo quantos serão modificados!
console.log(aprovados);