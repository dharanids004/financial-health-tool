export default function Dashboard({ data, t }) {
  if (!data || !data.metrics) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>{t.results}</h2>
      <p>{t.revenue}: ₹{data.metrics.revenue}</p>
      <p>{t.expenses}: ₹{data.metrics.expenses}</p>
      <p>{t.profit}: ₹{data.metrics.profit}</p>

      <h3>{t.risks}</h3>
      <ul>{data.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>

      <h3>{t.recommendations}</h3>
      <ul>{data.recommendations.map((r, i) => <li key={i}>{r}</li>)}</ul>
    </div>
  );
}
