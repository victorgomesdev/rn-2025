const cores = ["vermelho", "verde", "azul"]

// for...of
// for(let cor of cores){
//     console.log(cor)
// }


// for...in
const pessoa = { 
    nome: "Victor",
    idade: 21,
    usuario: "aluno"
}

for(let el in pessoa){
    console.log(`${el}: ${pessoa[el]}`)
}