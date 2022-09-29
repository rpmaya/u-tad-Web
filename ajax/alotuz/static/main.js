$(document).ready(
    function(){
        var arrLang;

        //TODO .ajax (type: GET arrLang)

        $('.translate').click(
            function() {
                var lang = $(this).children(":selected").attr("id");
                $('.lang').each(
                    function(index){
                        if($(this).val() != "") {
                            $(this).val(arrLang[lang][$(this).attr('key')])
                        } else {
                            if($(this).placeholder != "undefined"){
                                $(this).prop('placeholder',arrLang[lang][$(this).attr('key')]);
                            }
                            $(this).text(arrLang[lang][$(this).attr('key')]);
                        }
                    }
                );
            }
        )

        $('.envio-form').on('submit',function(event){
            event.preventDefault(); // Interrumpir el envio del formulario.

            //TODO $.ajax (type: POST name and email);
            
        });
    }
);
