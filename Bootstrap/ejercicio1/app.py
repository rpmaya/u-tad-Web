from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/<html2return>')
def return_html(html2return):
    return render_template(html2return)

if __name__ == "__main__":
    app.run(debug=True)
    