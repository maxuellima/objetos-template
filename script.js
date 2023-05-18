const estudante = {
nome: 'Juninho',
sobrenome: 'Neto',
numeroMatricula: "420",
notasSemestre:[8, 7, 4, 3]
}
estudante.modulo = 3;

console.log(`Nome: ${estudante.nome}`)
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)

const novoEstudante = {...estudante,
nome: "astrodev",
notasSemestre: [...estudante.notasSemestre,9],
modulo: estudante.modulo + 1
}
novoEstudante.notasSemestre.push(10)
console.log(novoEstudante)

const estudantesLabenu = []
estudantesLabenu.push(estudante, novoEstudante)
console.log(estudantesLabenu)

console.log("<---------------------------------------------------------->")

const carrinho = {
    nome: 'Junior',
    formaPagamento: 'crédito',
    endereco: "rua das agua",
}

carrinho.compras = [{nomeProduto: "Cuscuz", precoProduto: 1.79, quantidadeProdutos: 4,}, 
{nomeProduto: "café", precoProduto: 8.79, quantidadeProdutos: 2}]

console.log(carrinho.compras.length)


const carrinhoPresente = {
    ...carrinho,
    nome: "Neta",
    formaPagamento: "cartão-presente",

}

console.log(carrinho, carrinhoPresente)