from flask import Flask
from flask_cors import CORS
from .routes import main
from config import Config
import os

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config.from_object(Config)

    os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

    app.register_blueprint(main)

    return app
