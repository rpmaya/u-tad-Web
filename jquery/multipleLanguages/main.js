var arrLang = {
    'en': {
        'form-header-speaker':'Registration as Speaker',
        'form-header-company':'Registration as Company',
        'slogan': 'Transforming people through people!',
        'speaker':'Speaker',
        'company':'Company',
        'name':'Name',
        'surname':'Surname',
        'password':'Password',
        'male':'Male',
        'female':'Female',
        'email':'E-mail',
        'phone':'Phone number',
        'confirm-password':'Confirm Password',
        'register':'Register'
    },
    'es': {
        'form-header-speaker':'Registro como Ponente',
        'form-header-company':'Registro como Empresa',
        'slogan': '¡Transformando personas a través de personas!',
        'speaker':'Ponente',
        'company':'Empresa',
        'name':'Nombre',
        'surname':'Apelido',
        'password':'Contraseña',
        'male':'Hombre',
        'female':'Mujer',
        'email':'Email',
        'phone':'Telefóno',
        'confirm-password':'Confirmar Contraseña',
        'register':'Registrar'
    },
    'pt': {
        'form-header-speaker':'Cadastro como Palestrante',
        'form-header-company':'Cadastro como Empresa',
        'slogan': 'Transformando pessoas atravéz de pessoas!',
        'speaker':'Palestrante',
        'company':'Empresa',
        'name':'Nome',
        'surname':'Sobrenome',
        'password':'Senha',
        'male':'Masculino',
        'female':'Feminino',
        'email':'E-mail',
        'phone':'Número de telefone',
        'confirm-password':'Confirmar Senha',
        'register':'Registrar'
    }	
}

$(document).ready(
    function(){
        $('.translate').click(
            function() {
                //alert($(this).attr('id'));
                var lang = $(this).attr('id');
                $('.lang').each(
                    function(index, item){
                        //$(item).text('Hacked by Chinese');
                        //$(item).text($(item).attr('key'))
                        //alert($(item).val());

                        if($(item).val() != "") {
                            $(item).val(arrLang[lang][$(item).attr('key')])
                        } else if($(item).placeholder != "undefined"){
                            //alert($(item).placeholder);
                            $(item).prop('placeholder',arrLang[lang][$(item).attr('key')]);
                            //$(item).placeholder(arrLang[lang][$(item).attr('key')]);
                        } 
                         else {
                            $(item).text(arrLang[lang][$(item).attr('key')]);
                        }
                        
                        
                    }
                );
            }
        )
    }
);