const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número"));
const numero3 = Number(prompt("Digite o terceiro número"));

if (numero1 > numero2 ||  numero3 > numero1) {
    alert("O número 1 é maior");
} else {
    if (numero2 > numero1 || numero3 < numero2){
        alert("O número 2 é maior");

    } else {
        if (numero3 > numero2 || numero1 < numero3){
        alert ("O número 3 é o maior");
    }

    }
}

