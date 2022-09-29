from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/proceso', methods=['GET','POST'])
def proceso():
    time.sleep(3)
    name = request.form['name']
    email = request.form['email']
    if name and email:
        nuevoNombre = name + ' Gadi'
        return(jsonify({'name':nuevoNombre}))
    return jsonify({'error':'Faltan Datos'})


if __name__ == '__main__':
    app.run()