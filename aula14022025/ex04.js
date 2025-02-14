function returnDetalhesProduto(produto){
    return `Produto: ${produto.nome}, Preço: ${Intl.NumberFormat('pt-br', {currency: 'BRL'}).format(produto.preco)}, Estoque: ${produto.estoque} unidades.`
}

const produto = {
    nome: "Celular",
    preco: 2000,
    estoque: 150
}

console.log(returnDetalhesProduto(produto))