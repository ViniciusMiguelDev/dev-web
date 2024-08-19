function Pessoa(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`);
    };
};

const p1 = new Pessoa('Vinicius');
p1.falar();