// Classe que representa um herói
class Heroi {
  constructor(nome, level, tipo) {
    this.nome = nome;
    this.level = level;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    // Estrutura de decisão para definir o ataque
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} level ${this.level} atacou usando ${ataque}`);
  }
}

// Criando objetos (heróis)
const heroi1 = new Heroi("Arthus", 10, "guerreiro");
const heroi2 = new Heroi("Merlin", 20, "mago");
const heroi3 = new Heroi("Lee", 15, "monge");
const heroi4 = new Heroi("Hanzo", 18, "ninja");

// Laço de repetição para atacar
const herois = [heroi1, heroi2, heroi3, heroi4];

for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
