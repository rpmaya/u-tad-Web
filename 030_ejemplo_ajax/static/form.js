$(document).ready(function(){
    $('#form1').on('submit',function(event){
      // $.ajax().done(); //sintax general de AJAX
      $.ajax({ //Envio de los datos
        data: {
            name : $('#idNombre').val(), 
            email : $('#idEmail').val()
        },
        type: 'POST',
        url : 'http://localhost:5000/proceso'
      }).done( function(data){ // La recepción de la respuesta asincrona.
         
         if(data.error){
            $("#msgError").text(data.error).show();
         } else {
            $("#msgError").text(data.name).show();
         }
         
      }); //sintax general de AJAX
      //alert("Interrumpiendo el envio del formulario.");
      event.preventDefault(); // Interrumpir el envio del formulario.
    });
});