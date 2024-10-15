import { veiculo } from './veiculo';

export class Moto extends veiculo {
    private cilindrada: number; // Cilindrada da moto

    constructor(modelo: string, ano: number, cilindrada: number) {
        super(modelo, ano, 'Moto'); // Chama o construtor da classe pai
        this.cilindrada = cilindrada; // Inicializa a cilindrada
    }

    // Método que retorna os detalhes da moto, incluindo a cilindrada
    public mostrarDetalhes(): string {
        return `${super.mostrarDetalhes()}, Cilindrada: ${this.cilindrada}cc`;
    }
}
