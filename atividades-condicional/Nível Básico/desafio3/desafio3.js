let nota = Number(prompt("Digite sua nota: "));
if (Number.isNaN(nota) || nota < 0){
    alert ("Nota Inválida!");
}else {
    if (nota >=60){
        alert("Aprovado!")
    }else {
        alert("Reprovado!")
    }
}
