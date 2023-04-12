// Programação orientada a OBJETO

// Herança / Poliformismo / Encapsulamento

// const pessoa = {
//   nome: "Fernando",
//   falarNome() {
//     console.log("Meu nome é", this.nome);
//   },
//   mudarNome(nome: string) {
//     this.nome = nome;
//   },
// };

// const pessoa2 = Object.create(pessoa);

// pessoa2.nome = "Felipe";

// pessoa.falarNome();
// pessoa2.falarNome();

// class Pessoa {
//   protected nome: string = "";
//   private readonly sobrenome: string = "";
//   private _cpf: string = "";
//   static idade: string = "";

//   mudarNome(nome: string) {
//     this.nome = nome;
//     this.sobrenome = "";
//   }

//   get cpf() {
//     return this._cpf;
//   }

//   set cpf(value: string) {
//     console.log("ESTOU ALTERANDO O SEU CPF!");
//     this._cpf = value;
//   }

//   protected falarNome() {
//     console.log("Meu nome é", this.nome, "e meu cpf é", this.cpf);
//   }
// }

// class Programador extends Pessoa {
//   programar() {
//     this.falarNome();
//     console.log("e estou programando");
//   }
// }

// const programador = new Programador();

// programador.cpf = "meu cpf";

// programador.mudarNome("Fernando");

// programador.programar();

// class Notas {
//   constructor(
//     private readonly nota1: number = 0,
//     private readonly nota2: number = 0
//   ) {}

//   get media() {
//     return (this.nota1 + this.nota2) / 2;
//   }
// }

// const minhasNotas = new Notas(10, 20);

// console.log(minhasNotas.media);
