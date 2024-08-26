function verificarNumero() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.textContent = `${numero} é par.`;
    } else {
        resultado.textContent = `${numero} é ímpar.`;
    }
}