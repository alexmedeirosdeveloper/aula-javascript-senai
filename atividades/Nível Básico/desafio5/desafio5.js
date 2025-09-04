let idade = Number(prompt("Digite sua idade: "));
if (Number.isNaN(idade)){
    alert ("Idade Inválida!");
}else {
    if (idade === 0 || idade <= 12){
        alert("Você é uma criança!")
    }else {
        if (idade === 13 || idade <= 17){
        alert("Você é um adolescente!")
        } else {
            alert("Você é um adulto")
            }
        }
    }