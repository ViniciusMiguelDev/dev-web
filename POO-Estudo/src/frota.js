"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frota = void 0;
class Frota {
    constructor() {
        this.veiculos = []; // Inicializa o array de veículos
    }
    // Método para adicionar um veículo à frota
    adicionarVeiculo(veiculo) {
        this.veiculos.push(veiculo);
    }
    // Método para mostrar todos os veículos na frota
    mostrarFrota() {
        console.log("Frota de Veículos:");
        this.veiculos.forEach((veiculo) => {
            console.log(veiculo.mostrarDetalhes());
        });
    }
}
exports.Frota = Frota;
