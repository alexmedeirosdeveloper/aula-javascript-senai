let idade = Number(prompt("Digite sua idade: "));
if (Number.isNaN(idade) || idade < 0){
    alert ("Idade Inválida!");
}else {
    if (idade >=18){
        alert("Você é maior de idade!")
    }else {
        alert("Você não é maior de idade!")
    }
}