const usuario = prompt("Digite o usuário: ");
const senha = Number(prompt("Digite a senha: "));
const senhaCorreta = 1234;

if (usuario != "admin") {
    alert("Usuário Inválido")
} else {
        if (Number.isNaN(senha)) {
            alert("Essa senha não é um número válido");
        } else {
            if (senha === senhaCorreta) {
                alert("Usuários e senhas estão corretos!");
            }else {
                alert("Senha inválida");
            }
            
    }
}
