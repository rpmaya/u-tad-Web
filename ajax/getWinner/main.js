$(document).ready(function () {
    //Hago uso de https://jsonplaceholder.typicode.com/ que provee APIs de prueba
    //Accedermos a /users dentro de Resources: https://jsonplaceholder.typicode.com/users
    var participants = [];

    const showParticipants = (data) => {

        let usernames = []; //04 crear un array vacío

        data.forEach(element =>
            usernames.push(element.name)
        );
        $("#users").html("<strong>Participants:</strong> " + usernames);
        //$("#selected").text("<strong>Participants:</strong> " + usernames[aleat]);
        
    }

    const getWinner = (data) => {
        const aleat = Math.floor(Math.random() * data.length);
        $("#selected").html("<strong>Selected:</strong> " + data[aleat].name);
    }

    $.ajax({
        //crossDomain: true;
        type: 'GET', //Valor por defecto
        url: 'https://jsonplaceholder.typicode.com/users', //API Pública, con Flask hicimos el API privada
        contentType: 'application/json',
        async: true, //Valor por defecto
        //beforeSend: function() {console.log("Antes de la petición....");},
        success: function (res) { //Los datos que recibiré cuando haga la petición a la url
            //console.log(data); //Ejecutar con Live Server, ver con F12 la consola y refrescar
           participants = res;
           showParticipants(participants);
        }, 
        //complete: function() {
        //    console.log("Solicitud Completada:", users.length, "usuarios listados.");
        //},
        error: function (err) {
            console.log(err);
        }
    })

    $(".btn").click(
        function() {
            getWinner(participants);
        }
    );
    //Ver api.jquery.com/jQuery.ajax
});