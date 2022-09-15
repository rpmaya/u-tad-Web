function multiplicar() {
    var num1 = +prompt("Multiplica num1");
    var num2 = +prompt("Multiplica num2");
    var res = num1 * num2;
    if(isNaN(num1) || isNaN(num2)) {
        alert("Error: valor introducido no válido");
    } else {
        document.write(num1 + " x " + num2 + " = " + res);
    }
}

function mayor(numA, numB) {
    var num1 = +prompt("Mayor num1");
    var num2 = +prompt("Mayor num2");
    if (num1 > num2) {
        document.write(num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
        document.write(num2 + " es mayor que "+ num1);
    } else if (numA === numB) {
        document.write(num1 + " es igual a " + num2);
    } else {
        alert("Error: valor introducido no válido");
    }
}

function encabezado(texto, num) {
    var texto = prompt("Texto del encabezado");
    var num = +prompt("Encabezado número (1-6)");
    if(isNaN(num)) {
        alert("Error: valor introducido no válido");
    } else if (num < 1 || num > 6) {
        alert("Error: tamaño de encabezado no válido");
    } else {
        document.write("<h" + num + ">" +texto + "</h" + num + ">");
    }
}

// +prompt para capturar enteros
var opt = +prompt("Introduce un tipo de operación:\n 1. Multiplicación\n 2. Mayor\n 3. Encabezado");

switch (opt) {
    case 1:
        multiplicar();
        break;
    case 2:
        mayor();
        break;
    case 3:
        encabezado();
        break;
    default:
        alert("Opción incorrecta!");
}
