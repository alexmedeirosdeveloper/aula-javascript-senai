let numero = Number(prompt("Digite um número: "));
if (Number.isNaN(numero)){
    alert ("Número inválido!");
}else {
    if (numero % 2 === 0){
        alert("O número é par!")
    }else {
        alert("O número é ímpar!")
        }
}    