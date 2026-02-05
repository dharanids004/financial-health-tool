def detect_risks(metrics):
    risks = []
    if metrics["profit"] < 0:
        risks.append("Loss making business")
    if metrics["expenses"] > metrics["revenue"] * 0.8:
        risks.append("High operating expenses")
    return risks
