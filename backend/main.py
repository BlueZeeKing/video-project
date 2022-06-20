import json, time
from flask import Flask, render_template

app = Flask(__name__, static_folder="../dist/assets", static_url_path='/assets', template_folder="../dist")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/question")
def question():
    return json.dumps({"question":"hello", "answers":["1", "2", "3"]})

if __name__ == "__main__":
    app.run(debug=True)