function saudacao() {
    var turno = document.getElementById("turno").value.toUpperCase();
    var mensagem = "";

    if (turno === "M") {
        mensagem = "Bom Dia!";
    } else if (turno === "V") {
        mensagem = "Boa Tarde!";
    } else if (turno === "N") {
        mensagem = "Boa Noite!";
    } else {
        mensagem = "Turno inválido!";
    }

    document.getElementById("mensagem").innerText = mensagem;
}