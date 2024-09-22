function calcularArea() {
    const base = parseFloat(document.querySelector("#base").value);
    const altura = parseFloat(document.querySelector("#altura").value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, introduzca valores válidos para la base y la altura.");
        return;
    }

    const area = (base * altura) / 2;
    document.querySelector("#resultado").value = area.toFixed(2);
}

function calcularAreaOlder() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, introduzca valores válidos para la base y la altura.");
        return;
    }

    const area = (base * altura) / 2;
    document.getElementById("resultado").value = area.toFixed(2);
}