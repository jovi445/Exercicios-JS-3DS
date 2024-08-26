function verificarDivisao(event) {
    event.preventDefault();
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero % 3 === 0) {
        resultado.textContent = `O número ${numero} é divisível por 3.`;
    } else {
        resultado.textContent = `O número ${numero} não é divisível por 3.`;
    }
}