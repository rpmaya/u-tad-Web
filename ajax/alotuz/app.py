from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import time


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template("alotuz.html")

# EJERCICIO 1:
# CREAR UNA RUTA LLAMADA language_json DENTRO DEL app.py (YA QUE LAS RUTAS SIEMPRE VAN AQUI)
# QUE DEVUELVA EL JSON QUE TIENES EN alotuz.html
@app.route('/language_json')
def language_json():
    return (
	{
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
			'register':'Register',
			'login':'Login',
			'facebook':'Facebook page',
			'youtube':'Youtube channel',
			'linkedin':'LinkedIn page',
			'twitter':"Twitter page"
		},
		'es': {
			'form-header-speaker':'Registro como Ponente',
			'form-header-company':'Registro como Empresa',
			'slogan': '¡Transformando personas a través de personas!',
			'speaker':'Ponente',
			'company':'Empresa',
			'name':'Nombre',
			'surname':'Apellido',
			'password':'Contraseña',
			'male':'Hombre',
			'female':'Mujer',
			'email':'Email',
			'phone':'Telefóno',
			'confirm-password':'Confirmar Contraseña',
			'register':'Registrar',
			'login':'Acceder',
			'facebook':'Página de Facebook',
			'youtube':'Canal de Youtube',
			'linkedin':'Página de LinkedIn',
			'twitter':"Página de Twitter"
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
			'register':'Registrar',
			'login':'Entrar',
			'facebook':'Página do Facebook',
			'youtube':'Canal do Youtube',
			'linkedin':'Página do LinkedIn',
			'twitter':"Página do Twitter"
		}
	}
)

emails = ['andrea@gmail.com']

@app.route('/signup', methods=['GET','POST'])
def signup():
    email = request.form['email']
    if email in emails:
        return(jsonify({'error':'email ya existe'}))
    else:
        return(jsonify({'ok':'formulario Ok!'}))
#    all_param_as_string = ''
#    for param in request.args.keys():
#        all_param_as_string = all_param_as_string +  " {} : {} / ".format(param,request.args.get(param))
#    return(all_param_as_string)




