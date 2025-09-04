const numero1 = Number(prompt("Digite o primeiro número: "));
const operacao = prompt("Coloque aqui sua operação ( * , + , - , / )");
const numero2 = Number(prompt("Digite o segundo número"));

if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    alert("Número inválido")
} else {
    switch (operacao) {
    case "*":
        alert("Resultado" + (numero1 * numero2));
        break;
    case "+":
        alert("Resultado" + (numero1 + numero2));
        break;
    case "-":
    alert("Resultado" + (numero1 - numero2));
    break;    
    case "/":
        if (numero2 === 0) {
            alert("Erro: Divisão por 0");
        } else {
            alert("Resultado" + (numero1 / numero2));
        }
        break;
    default:
        alert("Cálculo Inválido");

    }
}
