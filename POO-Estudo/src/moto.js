"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.veiculo {
    constructor(modelo, ano, cilindrada) {
        super(modelo, ano, 'Moto'); // Chama o construtor da classe pai
        this.cilindrada = cilindrada; // Inicializa a cilindrada
    }
    // Método que retorna os detalhes da moto, incluindo a cilindrada
    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Cilindrada: ${this.cilindrada}cc`;
    }
}
exports.Moto = Moto;
