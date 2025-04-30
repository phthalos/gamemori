from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return jsonify({"message": "Hello, World!"})
    # return "<p>Hello, World!</p>"