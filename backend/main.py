from flask import Flask, render_template

app = Flask(__name__, static_folder="../dist/assets", static_url_path='/assets', template_folder="../dist")

@app.route("/")
def hello_world():
    return render_template("index.html")