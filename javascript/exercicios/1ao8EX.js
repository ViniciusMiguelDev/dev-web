// 1-
function calculadora(a, b) {
  console.log(a + b, a - b, a * b, a / b);
}

calculadora(2, 2);

// 2-
function validacao(a, b, c) {
  if ((a == b) == c) {
    return "Equilatero";
  } else if ((a == b && b !== c) || (a == c && c != b)) {
    return "Escaleno";
  } else if (a !== b && b !== c && a != c) {
    return "Isosceles";
  }
}

console.log(validacao(1, 1, 1));
console.log(validacao(1, 1, 2));
console.log(validacao(1, 2, 3));

// 3-
function expoente(a, b) {
  return a ** b;
}

console.log(expoente(2, 3));

// 4-
function expoente(a, b) {
  return a % b;
}

console.log(expoente(5, 2));

// 5-
function fixing(a) {
  return a.toFixed(2);
}

console.log(fixing(0.30000000000000004));

// 6-
function jurosSimples(capitalInicial, taxa, tempo) {
  return capitalInicial + capitalInicial * taxa * tempo;
}

function jurosCompostos(capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo;
}

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosCompostos(100, 10 / 100, 2));

// 7-
function baskara(ax2, bx, c) {
  let delta = bx ** 2 - 4 * ax2 * c;
  if (delta < 0) {
    return "Delta negativo";
  } else if (delta > 0) {
    let baskara1 = ((-bx + Math.sqrt(delta)) / 2) * ax2;
    let baskara2 = ((-bx - Math.sqrt(delta)) / 2) * ax2;
    return `X1= ${baskara1} e X2= ${baskara2}
 
 `;
  }
}

console.log(baskara(1, 12, -13));
console.log(baskara(1, 12, 13));

// 8-
let stringPontuacoes = [30, 40, 20, 4, 51, 25, 42, 38, 56, 0];
 
function avaliaPontuacoes (stringPontuacoes) {
    let qtdQuebraDeRecords = 0;
    let piorJogo = 1;
    let maiorPontuacao = stringPontuacoes[0];
    let menorPontuacao = stringPontuacoes[0];

    for (let i = 1; i < stringPontuacoes.length; i++) {
        if(stringPontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = stringPontuacoes[i]
            qtdQuebraDeRecords++
        }else if (stringPontuacoes[i] < menorPontuacao) {
            menorPontuacao = stringPontuacoes[i]
            piorJogo = i+1;
        };
    };
    return [qtdQuebraDeRecords, piorJogo]
};
 
console.log(avaliaPontuacoes(stringPontuacoes));