const quaseArray = {0: 'Vinicius', 1: 'Livia', 2: 'Miguel'};
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.value(this)},
    enumerable: false
});

console.log(quaseArray[0]);

const meuArray = ['Mariana', 'Danilo', 'Abacate'];
console.log(quaseArray.toString(), meuArray);