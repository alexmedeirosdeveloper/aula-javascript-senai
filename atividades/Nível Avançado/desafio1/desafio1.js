const medida1 = Number(prompt("Digite a primeira medida do triângulo: "));
const medida2 = Number(prompt("Digite a segunda medida do triângulo: "));
const medida3 = Number(prompt("Digite a terceira medida do triângulo: "));

if (Number.isNaN(medida1) || Number.isNaN(medida2) || Number.isNaN(medida3)) {
    alert("Coloque uma medida válida")
} else {
        if (medida1 === medida2 || medida1 === medida3 || medida2 === medida3) {
            alert("Esse é um triângulo Equilátero");
        } else {
            if (medida1 != medida2 || medida1 != medida3 || medida2 != medida3) {
                alert("Esse é um triângulo Escaleno");
            }else {
                alert("Esse é um triângulo Isósceles");
            }
            
    }
}
