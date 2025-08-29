console.log("Bem vindo!");
const prompt = require("prompt-sync")();
let nota = prompt("Digite sua nota:");
console.log(`Sua nota é: ${nota}`);

if (nota >=60){
    console.log("Aprovado!")
}else {
    console.log("Reprovado!")
}