function calcularArea() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    document.getElementById("resultado").value = parseFloat(base)*parseFloat(altura)/2;
}