from flask import Blueprint, request, jsonify
import os

from services.file_parser import parse_file
from services.financial_analysis import analyze
from services.risk_engine import detect_risks
from services.recommendation_engine import recommend

api = Blueprint("api", __name__)

@api.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return {"error": "No file uploaded"}, 400

    file = request.files["file"]
    file_path = os.path.join("uploads", file.filename)
    file.save(file_path)

    data = parse_file(file_path)

    # If PDF → return text only (future NLP)
    if isinstance(data, dict) and data.get("type") == "pdf_text":
        return jsonify({
            "message": "PDF uploaded successfully",
            "content": data["content"][:500]
        })

    metrics = analyze(data)
    risks = detect_risks(metrics)
    recommendations = recommend(metrics, risks)

    return jsonify({
        "metrics": metrics,
        "risks": risks,
        "recommendations": recommendations
    })
