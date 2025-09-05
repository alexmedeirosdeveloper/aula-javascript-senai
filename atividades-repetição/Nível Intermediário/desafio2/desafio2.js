let secreto = Math.floor(Math.random() * 100) +1;

let tentativas;

while (tentativas !== secreto) {
    tentativas = Number(prompt("Adivinhe o número entre 1 a 100:"));
    if (tentativas > secreto) {
        alert ("Tente um número menor")
    } else if (tentativas < secreto){
        alert("Tente um número maior!")
    } else {
        alert("Parabéns, você acertou!!!")
    }
}

