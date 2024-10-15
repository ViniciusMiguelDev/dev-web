"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veiculo = void 0;
class veiculo {
    constructor(modelo, ano, tipo) {
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
    }
    mostrarDetalhes() {
        return `Modelo: ${this.modelo}, ano: ${this.ano}, tipo: ${this.tipo}`;
    }
}
exports.veiculo = veiculo;
