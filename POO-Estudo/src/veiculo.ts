export class veiculo {
    protected modelo: string;
    protected ano: number;
    protected tipo: string;

    constructor(modelo:string, ano:number, tipo:string) {
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
    }

    public mostrarDetalhes(): string {
        return `Modelo: ${this.modelo}, ano: ${this.ano}, tipo: ${this.tipo}`
    }
}