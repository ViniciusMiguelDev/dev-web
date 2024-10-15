"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.veiculo {
    constructor(modelo, ano, portas) {
        super(modelo, ano, 'Carro'); // Chama o construtor da classe pai
        this.portas = portas; // Inicializa o número de portas
    }
    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Portas: ${this.portas}`;
    }
}
exports.Carro = Carro;
