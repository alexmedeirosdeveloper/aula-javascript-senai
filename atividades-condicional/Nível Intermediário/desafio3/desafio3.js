const compra = Number(prompt("Digite o valor da sua compra: "));

if (Number.isNaN(compra) || Number.isNaN(compra)) {
    alert("Número inválido")
} else {
        if (compra >= 100) {
            alert("Você ganhou 10% de desconto, seu produto agora custa " + (compra - compra * 0.10) + " Reais");
        } else {
            
    }
}
