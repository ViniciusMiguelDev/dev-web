function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Você passou!");
    }
};

soBoaNoticia(7);
soBoaNoticia(6);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor);
    }
};
seForVerdadeEuFalo();
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(false);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(1);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");