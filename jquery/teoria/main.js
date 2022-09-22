// jQuery() o $()
// $("selector") -- seleccionamos el elemento de HTML que queramos tratar
// $("selector").accion -- la función a ejecutar

// Seleccionamos el h1 y ejecutamos la acción que queramos
// $("h1").hide();

// 1 Pero antes vamos a ver como ejecutar después de que el document haya cargado completamente
/*$(document).ready(function(){
    //Aquí va nuestro código javasript
});*/


// 2 Ejemplo de código (con función resumida del document-ready)
$(function(){

    // 3 seleccionamos todos los párrafos y le añadimos css
    //$("p").css({"background-color": "red"});

    // 4 seleccionamos solo el párrafo segundo por id
    $("#segundo").css({"background-color": "red"});

    // 5 seleccionamos solo el párrafo tercero por clase
    $(".tercero").css({"background-color": "violet"});

    // 6 seleccionamos todos los button y ejecutamos una acción dentro de la función que declaremos
    /* $("button").click(function(){
        //alert("Hola");
        $("#segundo").hide();
    }); */

    // 7 escondemos y mostramos en función del botón que pulsemos
    $("#btn-hide").click(function(){
        $("#segundo").hide();
    });
    // 7.a. con doble click
    $("#btn-show").dblclick(function(){
        $("#segundo").show();
    });

    //8 Otros eventos de ratón (entrar y salir)
    $(".tercero").mouseenter(function(){
        $(".tercero").hide();
        //8.1 Si quiero que ocurra más lentamente
        //$(".tercero").fadeOut();
        //8.2 Otra
        //$(".tercero").slideDown();
    });
    $(".tercero").mouseleave(function(){
        $(".tercero").show();
        //8.1 Si quiero que ocurra más lentamente
        //$(".tercero").fadeIn();
        //8.2 Otra
        //$(".tercero").slideUp();
    });
    // 8.3 Nuestra propia animación
    $("#primero").animate({width: "300px"}) //Reload la página (F5) para verlo

    // 9 alerta con un párrafo, y también de un atributo
    $("#btn-alert").click(function(){
        //alert($("#segundo").text()); //solo texto
        //alert($("#segundo").html()); //interpreta html
        alert($("#segundo").attr("title"));
    });

    // 10 añadir contenido html
    $("#btn-add").click(function(){
        //$("#segundo").text("Hola <strong>estudiantes</strong>"); //Aparece el "strong"
        //$("#segundo").html("Hola <strong>estudiantes</strong>"); //Interpreta el "strong"
        //10.b Si queremos añadir texto al final en vez de sobreescribir
        $("#segundo").append(" Adiós <strong>estudiantes</strong>");
        //10.c Si queremos añadir texto al principio
        $("#segundo").prepend("Hola ");
        //10.d Añadir un nuevo párrafo después
        $("#segundo").after("<p>Otro <strong>párrafo</strong></p>");
        //10.e Añadir un nuevo párrafo antes
        $("#segundo").before("<p>Previo <strong>párrafo</strong></p>");

        //10.f Eliminar un elemento
        $(".tercero").remove(); //ya no está oculto, está eliminado
        //10.g Vaciar
        $("#btn-show").empty(); //ya no está oculto, está eliminado
    });

    // 11 hojas de estilo
    $("#btn-style").click(function(){
        //$("#h1").addClass("blue"); 
        $("h1").addClass("red");
    });
    $("#btn-non-style").click(function(){
        //$("#h1").removeClass("blue"); 
        $("h1").removeClass("red");
    });
    $("#btn-toggle-style").click(function(){
        //$("#h1").removeClass("blue"); 
        $("h1").toggleClass("blue");
    });

});


