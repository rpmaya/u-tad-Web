from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/proceso', methods=['POST'])
def proceso():
    #time.sleep(1)
    name = request.form['name']
    email = request.form['email']

    if name and email:
        newName = name[::-1]
        return(jsonify({'name':newName}))

    return jsonify({'error':'Missing Data!'})


if __name__ == '__main__':
    app.run()