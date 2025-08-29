console.log("Bem vindo!");
const prompt = require("prompt-sync")();
let idade = prompt("Digite sua idade:");
console.log(`Sua idade é: ${idade}`);

if (idade == 0 && idade <= 12){
    console.log("Você é uma criança!")
}else {
    if (idade == 13 && idade <= 17){
        console.log("Você é um adolescente!")
    }else {
        if (idade >= 18) {
            console.log("Você é um adulto!")
        }else {
            console.log("Idade inválida, insira um número positivo!")
        }
    }
}