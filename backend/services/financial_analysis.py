def analyze(data):
    revenue = sum(item["revenue"] for item in data)
    expenses = sum(item["expenses"] for item in data)
    profit = revenue - expenses

    return {
        "revenue": revenue,
        "expenses": expenses,
        "profit": profit,
        "health": "Good" if profit > 0 else "Poor"
    }
