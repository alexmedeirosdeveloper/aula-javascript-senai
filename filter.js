// Filter, Map, Find e Reduce

//Filter
//Exxemplos: Obter um número par do array
/*
const nums = [1, 2, 3, 4, 5, 6];

// filter
const pares = nums.filter(n => n % 2 === 0);

console.log(pares)
*/

//callback
/*
function digaOla(nome) {
    console.log("Olá " + nome);
}

function executar(callback) {
    callback("Lucas")
}
*/

//callback
/*
const idades = [15, 20, 25, 12];
const maiores = idades.filter(function(idade) {
    return idade >= 18;
})
console.log(maiores)
*/

//callback
/*
const idades = [15, 20, 25, 12];
const maiores = idades.filter((i) => {return idades >=18} {
})
console.log(maiores)
*/

//callback
/*
const idades = [15, 20, 25, 12];
const maiores = idades.filter(i => i >= 18)
console.log(maiores)
*/

//callback
/*
const produtos = [
    {id: 1, nome: "Camiseta", preco: 30, promocao:false}, 
    {id: 2, nome: "Caneca", preco: 15, promocao:true},
    {id: 3, nome: "Boné", preco: 25, promocao:true},
];
//Filtrar produtos em promoção
const emPromocao = produtos.filter(p => p.promocao === true);
console.log(emPromocao)
*/

//Map
/*
const nums = [1, 2, 3, 4]

// map cria um novo array com o resultado da função aplicada a cada item
const dobrados = nums.map(n => n * 2);
console.log(dobrados)
*/

/*
const alunos = [
    {nome: "Ana", nota: 8,},
    {nome: "Bruno", nota: 6,}

];

const nomes = alunos.map(a => `${a.nome}`);
const comAprovacao = alunos.map(a => ({...a, aprovado: a.nota >= 7}));

console.log(comAprovacao)
*/

//Find busca o primeiro elemento que satisfaz a condição e retorna esse elemento
/*
const ns = [3, 7, 4, 9];
const primeiroPar = ns.find(n => n % 2 ===0);
console.log(primeiroPar);
*/

/*
const produtos = [
    {id: 1, nome: "Camiseta"},
    {id:2, nome: "Caneca"},
];
const p = produtos.find(p => p.id === 2);
console.log(p)
*/

//Reduce reduz o array a um único valor (número, objeto, array...)
/*
const itens = [
    {nome: "Caneta", categoria: "Papelaria", preco:3},
    {nome: "Caderno", categoria: "Papelaria", preco:15},
    {nome: "Maçã", categoria: "Alimentos", preco:2},
]

const totalPorCategoria = itens.reduce((acc, it) => {
    const cat = it.categoria;
    if (!acc[cat]) acc[cat] = 0;
    acc[cat] += it.preco;
    return acc;
}, {});
console.log(totalPorCategoria)
*/

/*
const compras = [
    {nome: "Leite", preco:5},
    {nome: "Pão", preco:8},
    {nome: "Manteiga", preco:12},
]

const valorTotal = compras.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.preco
}, 0)

console.log(valorTotal)
*/

//Lista de produtos
const produtos = [
    {id:1, nome: "Notebook", preco: 1000}
    {id:2, nome: "Mouse", preco: 300}
    {id:3, nome: "Teclado", preco: 500}
    {id:4, nome: "Monitor", preco: 1200}
];

//Filtrar produtos com o preço acima de 500
const produtosCaros = produtos.filter(produto => produto.preco > 500)

//Encontrar o primeiro produto chamado "Mouse"
const mouse = produtos.find(produto => produto.nome === "Mouse");
//Criar um array apenas com os nomes dos produtos
const nomesProdutos = produtos.map(produtos => produtos.nome);
//Somar todos os preços dos produtos usando reduce
const totalPreco = produtos.reduce((acumulador, produto) => {
    return acumulador = produto.preco; 
}, 0);
//Retorno
