const pilotos = ["Vettel", "Alonso", "Livia", " Vinicius"];
pilotos.pop(); //Apaga o ultimo elemento
console.log(pilotos);

pilotos.push("Abacate"); //Coloca na ultima posicao
console.log(pilotos);

pilotos.shift(); //Remove o primeiro!
console.log(pilotos);

pilotos.unshift('Peixe'); //Coloca na primeira posicao
console.log(pilotos);


//Adicionar com splice
pilotos.splice(2, 0, 'Botas', 'Massa'); // 2 = posicao inicial / 0 = Nao remover nenhum
console.log(pilotos);

//Remover com splice
pilotos.splice(3, 1); // 3= posicao inicial / 1 = Remover 1 elemento (Massa)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array apartir do indice indicado (indice 2)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Do indice 1 ate o 3 (ele bota o 4 como limite e nao pega ele)
console.log(algunsPilotos2);