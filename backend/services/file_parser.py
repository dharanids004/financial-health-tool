import pandas as pd
from PyPDF2 import PdfReader
import os

def parse_file(file_path):
    ext = os.path.splitext(file_path)[1].lower()

    if ext == ".csv":
        df = pd.read_csv(file_path)
        return df.to_dict(orient="records")

    if ext in [".xlsx", ".xls"]:
        df = pd.read_excel(file_path)
        return df.to_dict(orient="records")

    if ext == ".pdf":
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        return {"type": "pdf_text", "content": text}

    raise ValueError("Unsupported file format")
