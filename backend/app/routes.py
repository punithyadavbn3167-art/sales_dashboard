from flask import Blueprint, request, jsonify, current_app
import os
from .services import load_csv, get_monthly_sales, get_yearly_sales

main = Blueprint("main", __name__)

@main.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    filepath = os.path.join(current_app.config["UPLOAD_FOLDER"], file.filename)
    file.save(filepath)

    load_csv(filepath)

    return jsonify({"message": "File uploaded successfully"})

@main.route("/monthly")
def monthly():
    data = get_monthly_sales()
    if data is None:
        return jsonify({"error": "No file uploaded"}), 400
    return jsonify(data)

@main.route("/yearly")
def yearly():
    data = get_yearly_sales()
    if data is None:
        return jsonify({"error": "No file uploaded"}), 400
    return jsonify(data)
