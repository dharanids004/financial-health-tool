def recommend(metrics, risks):
    recs = []

    if "Loss making business" in risks:
        recs.append("Reduce expenses and improve pricing strategy")

    if metrics["health"] == "Good":
        recs.append("Eligible for working capital loan")

    return recs
