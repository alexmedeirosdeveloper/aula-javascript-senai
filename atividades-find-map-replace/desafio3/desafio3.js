const usuarios = [
    { id: 1, nome: "A" },
    { id: 3, nome: "C" },
    { id: 2, nome: "B" },
  ];

  const n = usuarios.find(n => n.id === 3);
console.log(n);