from flask import Flask
from flask_cors import CORS
from routes.api import api
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

app.register_blueprint(api, url_prefix="/api")

@app.route("/")
def home():
    return {"status": "Backend running"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
