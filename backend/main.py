from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="../videos", static_url_path='/videos')
CORS(app)

@app.route("/question")
def question():
    response = jsonify({"question":"What action is this person performing?", "answers":["Making a salad", "Cooking pasta", "Cutting an apple"], "videoID":"salat", "videoPath":"http://127.0.0.1:5000/videos/salat.mp4"})
    return response

@app.route("/submit", methods=["POST"])
def submit():
    print(request.json.get("selectedIndex"))
    return "hello"

if __name__ == "__main__":
    app.run(debug=True)