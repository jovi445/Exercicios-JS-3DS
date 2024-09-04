function cadastrarUsuario() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    document.getElementById("mensagem").innerHTML = `Usuário ${nome} cadastrado com sucesso!`;
}