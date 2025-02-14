// const pessoa = {
//     nome: "Victor",
//     idade: 21,
//     usuario: "aluno",
//     saudar: function () {
//         console.log("Olá meu nome é " + this.nome + " e eu sou " + this.usuario)
//     }
// }

// pessoa.saudar()

class Animal {
    constructor(nome, tipo) {
        this.nome = nome
        this.tipo = tipo
    }

    exibirInformacoes(){
        return `Nome: ${this.nome}, Tipo: ${this.tipo}`
    }
}

const a1 = new Animal("Totó", "cachorro")

console.log(a1.exibirInformacoes())