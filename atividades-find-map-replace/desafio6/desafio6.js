const itens = [
  { nome: "Caneta", categoria: "papel", preco: 3 },
  { nome: "Caderno", categoria: "papel", preco: 15 },
  { nome: "Banana", categoria: "alimento", preco: 2 },
];

//Reduce para agrupar
const agrupado = itens.reduce((acc, item) => {
  //Se a categoria ainda não existe no acumulador, criamos
  if(!acc[item.categoria]) {
    acc[item.categoria] = 0;
    
  }
  //Somamos o preço do item na categoria correspondente
  acc[item.categoria] += item.preco

  return acc;
}, {});

console.log(agrupado)