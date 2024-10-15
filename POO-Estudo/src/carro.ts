import { veiculo } from "./veiculo";

export class Carro extends veiculo {
    private portas: number;

    constructor(modelo: string, ano: number, portas: number) {
        super(modelo, ano, 'Carro'); // Chama o construtor da classe pai
        this.portas = portas; // Inicializa o número de portas
    }

    public mostrarDetalhes(): string {
        return `${super.mostrarDetalhes()}, Portas: ${this.portas}`;
    }
}