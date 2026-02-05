import React, { useState } from "react";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import translations from "./i18n";

export default function App() {
  const [result, setResult] = useState(null);
  const [lang, setLang] = useState("en");

  return (
    <div style={{ padding: 30, fontFamily: "Arial", maxWidth: 900, margin: "auto" }}>
      <h1>{translations[lang].title}</h1>

      <div style={{ marginBottom: 20 }}>
        <label><strong>Language:</strong></label>{" "}
        <select onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      <Upload setResult={setResult} />

      {result && (
        <>
          <Dashboard data={result} t={translations[lang]} />
          <Reports data={result} t={translations[lang]} />
        </>
      )}
    </div>
  );
}
