//While

/*
let i = 1;

while (i <= 5) {
    console.log("Número:" , i);
    i++;
}

*/

//do...while

/*
let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Acesso liberado!")
*/

/*
let senha;
let tentativas = 0;
const senhaCorreta = "1234";

do {
    senha = prompt("Digite a senha:");
    tentativas++;

    if (senha === senhaCorreta){
    alert("Acesso liberado")
    break;
    }

    if (tentativas >=3) {
        alert("O número máximo de tentativasfoi atingida. Acesso bloqueado!")
        break;
    }
    
} while (true);
*/

//for contagens

//Estrutura:

/*
for (let i = 0; i <=10 ; i++) {
    const element = array[index];
    
}
const frutas = ["Maçã", "Banana", "Laranja"];

for (const fruta of frutas) {
    console.log("Fruta", fruta)
}

//For...in
const pessoa = {nome: "Lucas", idade: 25, Cidade: "Santo André"}
for (const chave in pessoa) {
console.log(`${chave}: ${pessoa[chave]}`)    
}
*/


let secreto = Math.floor(Math.random() * 50) +1;

let tempo = 10;
let tentativas;
let desarmou = false;

alert("Uma bomba foi ativada!!!");
alert("Você precisa adivinhar o número secreto entre 1 e 50 para desarma-la.");
alert("Você tem apenas" + tempo + "tentativas. Boa sorte!!!");

const somExplosao = new Audio("");

while (tempo > 0 && !desarmou) {
    tentativas = Number(prompt(`Digite sua tentativa (restam ${tempo} tentativas)`));

    if (tentativas === secreto) {
        alert("Você acertou! A bomba foi desarmada a tempo!");
        desarmou = true;
    } else if (tentativas > secreto) {
        alert("Número errado! A dica: tente número menor!")
    } else if (tentativas < secreto) {
        alert("Número errado! A dica: tente número maior!")
    }
}

