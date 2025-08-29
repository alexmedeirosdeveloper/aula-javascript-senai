// Operadores Relacionais

// > (Maior Que)
// < (Menor Que)
// >= (Maior ou igual)
// <= (Menor ou igual)
// == (Igualdade, sem verificar o tipo)
// === (Igualdade estrita, verifica o tipo)
// != (Diferente, sem verificar o tipo)
// != (Diferente estrito,verifica o tipo)

let numero = "255";
if(numero == 21){
    console.log("Ok");
}

if(numero === 255){
    console.log("OK");
}

let bool = true;

if (bool == true){
    console.log("Sim entrou no if");
}


//--------------------------------------------------------------------------

let variavel1 = "2";
let variavel2 = "4";
let bool2 = false;

if(variavel1 == 3) {
    console.log(`A variavel1 tem esse valor`);
}else{
    console.log(`A variavel1 não tem esse valor`);
}


// Condicional aninhada
if(variavel1 == 2){
    console.log("A variavel1 tem esse valor");
    if(variavel2 == 4){
        console.log("A variavel2 tem esse valor");
    }else {
        console.log("A variavel2 não tem esse valor");

    }

}else {
    console.log("A variavel1 não tem esse valor");
}

// Condicional (Diferente)

console.log(1 != '1'); // False (Valores são iguais)
console.log(1 !== '1'); // True (Valores são diferentes)



