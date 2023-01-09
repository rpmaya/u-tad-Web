
const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;
const max = 2;
const results = [];
var humanos;
var ronda = 1;

$(document).ready(function () {

    const playAuto = (n) => {
        for (let i = 1; i <= n; i++) {
            const aleat = Math.floor(Math.random() * 3 + 1);
            results[i] = aleat;
        }
    }

    const playManual = (n) => {
        for (let i = 2; i > max - n; i--) {
            let jugada = "0";
            while (jugada !== "1" && jugada !== "2" && jugada !== "3") {
                jugada = prompt("Jugador " + i + " introduzca 1, 2 ó 3 (1-Piedra, 2-Papel, 3-Tijera)");
            }
            results[i] = parseInt(jugada);  
        }
    }

    const reveal = (n) => {
        for (let i = 1; i <= n; i++) {
                if (results[i] === PAPEL) {
                    $("#jugador"+i).attr("src", "img/papel.JPG");
                } else if (results[i] === TIJERA) {
                    $("#jugador"+i).attr("src", "img/tijera.JPG");
                } else {
                    $("#jugador"+i).attr("src", "img/piedra.JPG");
                }
        }
    }

    const setCounts = (n) => {
        console.log(results[1], results[2]);
        if (results[1] === PIEDRA && results[2] === TIJERA) {
            $("#cont1").html(parseInt($("#cont1").html())+1);
        } else if (results[1] === PIEDRA && results[2] === PAPEL) {
            $("#cont2").html(parseInt($("#cont2").html())+1);
        } else if (results[1] === PAPEL && results[2] === PIEDRA) {
            $("#cont1").html(parseInt($("#cont1").html())+1);
        } else if (results[1] === PAPEL && results[2] === TIJERA) {
            $("#cont2").html(parseInt($("#cont2").html())+1);
        } else if (results[1] === TIJERA && results[2] === PAPEL) {
            $("#cont1").html(parseInt($("#cont1").html())+1);
        } else if (results[1] === TIJERA && results[2] === PIEDRA) {
            $("#cont2").html(parseInt($("#cont2").html())+1);
        }
    }

    const setWinner = () => {
        val1 = parseInt($("#cont1").html());
        val2= parseInt($("#cont2").html());

        if (val1 > val2) {
            $("h1").html("Ganador el jugador 1");
            $("#j1").css("backgroundColor", "green");
            $("#j2").css("backgroundColor", "red");
        } else if (val1 < val2) {
            $("h1").html("Ganador el jugador 2");
            $("#j2").css("backgroundColor", "green");
            $("#j1").css("backgroundColor", "red");
        } else {
            $("h1").html("Empate");
        }
    }

    $(".hide").hide();

    $("#jugar").click(function() {
      
        humanos = $("#humanos").val();
      
        $(".hide").show();
        $("form").hide();
        $("#jugar").text("Continuar");

        $("h1").html("Ronda "+ ronda++);
      
        playAuto(max - humanos);
        playManual(humanos);
        setTimeout(function (){
            reveal(max);
        }, 1000);
        setCounts();
        
    });

    $("#finalizar").click(function() {
        setWinner();
        $("button").hide();
        setTimeout(function (){
            location.reload();
        }, 10000);
    });  
});