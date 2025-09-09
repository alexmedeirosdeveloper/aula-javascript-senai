const produtos = [
  { nome: "X", preco: 10 },
  { nome: "Y", preco: 30 },
  ];

  const n = produtos.find(n => n.id <= 20);
console.log(n);