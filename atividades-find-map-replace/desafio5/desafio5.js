const itens = [
  { preco: 10 }, { preco: 20 }, { preco: 5 }
];
//Reduce acumula valores. Começa rm 0 e soma o preço de cada item
const precoTotal = itens.reduce((acumulador, item) => {
  return acumulador + item.preco;
}, 0)

console.log(precoTotal)