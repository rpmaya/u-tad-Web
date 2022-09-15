var num1 = 5;
var num2 = 8;

if (num1 < num2) {
    alert("El num1 es menor que el num2");
}

if (num2 > 0) {
    alert("El num2 es positivo");
}

if (num1 < 0 || num1 !== 0) {
    alert("El num1 es negativo o distinto de cero");
}

if (num1++ < num2) {
    alert("Incrementar en 1 el num1 no lo hace mayor o igual que el num2");
}