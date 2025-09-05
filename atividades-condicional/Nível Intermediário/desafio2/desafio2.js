const nota = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número"));
const numero3 = Number(prompt("Digite o terceiro número"));

if (Number.isNaN(numero1) || Number.isNaN(numero2) || Number.isNaN(numero3)) {
    alert("Número Inválido");
} else {
    let maior = numero1;

    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }
    alert("O maior número é: " + maior);

}

