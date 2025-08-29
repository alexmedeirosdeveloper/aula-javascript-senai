console.log("Bem vindo!");
const prompt = require("prompt-sync")();
let numero = prompt("Digite um número:");
console.log(`Seu nome é: ${numero}`);

if (numero >0){
    console.log("O número é positivo!")
}else {
    console.log("O número é negativo!")
}