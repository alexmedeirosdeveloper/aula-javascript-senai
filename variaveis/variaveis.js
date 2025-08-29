let nome = "João"; //Variável que armazena minha string

const idade = "21"; //Variável que armazena número

var cidade = "São Paulo"; //Variável que armazena minha string

// (const) = Variável que não é possível mudar o valor dela no meio do código

// (var) = Variável que é possível mudar o valor dela no meio do código

// (let) = (var) porém mais atualizado, por conta de que o var vai ser descontinuado

//Mostrar a variável nome no terminal
console.log (nome);

//Mostrar uma frase com todas as variáveis criadas
console.log("O meu nome é " + nome + ", eu tenho " + idade + " anos " + "e eu nasci em " + cidade);

console.log(`O meu nome é ${nome}, eu tenho ${idade} anos e eu nasci em ${cidade}`);

let estaChovendo = false; //Variável Boolean que indica que está falso o valor
let taNublado = true; //Variável Boolean que indica que está verdadeiro o valor

// Variáveis underfined
let marca;
console.log(marca);

// Variável Null
let endereco = null;

//Tipo Primitivo na Variável
//Typeof
console.log(typeof idade);