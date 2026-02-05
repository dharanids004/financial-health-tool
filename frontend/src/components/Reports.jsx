export default function Reports({ data, t }) {
  if (!data || !data.metrics) return null;

  const { revenue, expenses, profit, health } = data.metrics;

  return (
    <div
      style={{
        marginTop: 40,
        padding: 25,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fafafa"
      }}
    >
      <h2>📄 {t.reportTitle}</h2>

      {/* Business Summary */}
      <section style={{ marginBottom: 20 }}>
        <h3>{t.businessSummary}</h3>
        <p>
          {health === "Good"
            ? t.goodHealthSummary
            : t.poorHealthSummary}
        </p>
      </section>

      {/* Financial Snapshot */}
      <section style={{ marginBottom: 20 }}>
        <h3>{t.financialSnapshot}</h3>
        <table width="100%" border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td><strong>{t.revenue}</strong></td>
              <td>₹ {revenue}</td>
            </tr>
            <tr>
              <td><strong>{t.expenses}</strong></td>
              <td>₹ {expenses}</td>
            </tr>
            <tr>
              <td><strong>{t.profit}</strong></td>
              <td>₹ {profit}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Risks */}
      <section style={{ marginBottom: 20 }}>
        <h3>{t.risks}</h3>
        {data.risks.length === 0 ? (
          <p>{t.noMajorRisks}</p>
        ) : (
          <ul>
            {data.risks.map((risk, i) => (
              <li key={i}>{risk}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Recommendations */}
      <section>
        <h3>{t.recommendations}</h3>
        <ul>
          {data.recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
