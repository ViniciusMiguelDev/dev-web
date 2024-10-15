import { veiculo } from './veiculo';

export class Frota {
    private veiculos: veiculo[]; // Array para armazenar os veículos

    constructor() {
        this.veiculos = []; // Inicializa o array de veículos
    }

    // Método para adicionar um veículo à frota
    public adicionarVeiculo(veiculo: veiculo): void {
        this.veiculos.push(veiculo);
    }

    // Método para mostrar todos os veículos na frota
    public mostrarFrota(): void {
        console.log("Frota de Veículos:");
        this.veiculos.forEach((veiculo) => {
            console.log(veiculo.mostrarDetalhes());
        });
    }
}
