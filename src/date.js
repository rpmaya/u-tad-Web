function reloj() {
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var min = tiempo.getMinutes();
    var seg = tiempo.getSeconds();

    //dos dígitos en formato hora
    stringSeg = new String(seg);
    if (stringSeg.length == 1) { seg = '0' + seg; }

    stringMin = new String(min);
    if (stringMin.length == 1) { min = '0' + min; }

    stringHora = new String(hora);
    if (stringHora.length == 1) { hora = '0' + hora; }

    var refresh = setInterval(reloj, 1000);
    document.getElementById('reloj').innerHTML = hora + ":" + min + ":" + seg;
}

function fecha() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anyo = fecha.getFullYear();

    stringDia = new String(dia);
    if (stringDia.length == 1) { dia = '0' + dia; }

    stringMes = new String(mes);
    if (stringMes.length == 1) { mes = '0' + mes; }

    document.getElementById('fecha').innerHTML = dia + "/" + mes + "/" + anyo;
}

function main() {
    reloj();
    fecha();
}