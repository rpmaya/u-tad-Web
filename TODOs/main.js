const showTODOs = (data) => {
    data.forEach(element =>
        $("#tareas").append("<li>" + element.title + "</li>")
    );
}

const addTODO = () => {
    $("#tareas").append('<li>' + $('#tarea').val() + "</li>");
}

const filterTODOs = () => {
    $("li").show().filter(function(index) {
        const texto = $('#buscar').val()
        return $(this).text().search(texto) < 0;
    }).hide();
}


$(document).ready(function () {
    $.ajax({
        //crossDomain: true;
        type: 'GET', //Valor por defecto
        url: 'https://jsonplaceholder.typicode.com/albums', //API Pública, con Flask hicimos el API privada
        contentType: 'application/json',
        async: true, //Valor por defecto
        //beforeSend: function() {console.log("Antes de la petición....");},
        success: function (res) { //Los datos que recibiré cuando haga la petición a la url
           showTODOs(res.slice(0,19));
        }, 
        error: function (err) {
            console.log(err);
        }
    })

    $("#add").click(
        function () {
            addTODO();
        }
    )

    $("#search").click(
        function () {
            filterTODOs();
        }
    )

});