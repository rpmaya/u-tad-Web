var t = 10;
var intervalo;

function restar(){
    if (t==0) {
        document.getElementById('reloj').innerHTML = "BOOM!";
        clearInterval(intervalo);
    } else {
        document.getElementById('reloj').innerHTML = "00:00:0" + --t;
    }
}

function activar() {
    intervalo = setInterval(restar, 1000);
}

function desactivar() {
    clearInterval(intervalo);
}