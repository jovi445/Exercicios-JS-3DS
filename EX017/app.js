function encontrarMaior() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var maior = Math.max(num1, num2, num3);

    document.getElementById("resultado").innerText = "O maior número é: " + maior;
}