function calcularArea() {
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    document.getElementById("resultado").value = parseFloat(base)*parseFloat(altura)/2;
}