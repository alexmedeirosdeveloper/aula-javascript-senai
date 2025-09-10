const produtos = [
  { nome: "X", preco: 10 },
  { nome: "Y", preco: 30 },
  ];

  //Primeiro filtramos apenas os produtos com preço >20
  const produtosCaros = produtos.filter(p => p.preco > 20);
  //Depois usamos map para pegar apenas os nomes
  const nomesCaros = produtosCaros.map(p => p.nome)
  console.log(nomesCaros)