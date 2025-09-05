const nota = Number(prompt("Digite sua nota: "));

if (Number.isNaN(nota)) {
    alert("Nota Inválida");
} else {
    if (nota < 60) {
        console.log("Você tirou F");
    } else {
        if (nota >= 60 || nota <= 69) {
            console.log("Você tirou D");
        } else {
            if (nota >= 70 || nota <= 79) {
                console.log("Você tirou c");
            } else {
                if (nota >= 80 || nota <= 89) {
                    console.log("Você tirou B");
                }else {
                    if (nota >= 90 || nota <= 100) {
                        console.log("Você tirou A");
                    }
                }
            }
        }
    }


}