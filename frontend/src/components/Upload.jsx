import { uploadFile } from "../api";

export default function Upload({ setResult }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const res = await uploadFile(file);
    setResult(res);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input type="file" accept=".csv,.xlsx,.pdf" onChange={handleUpload} />
    </div>
  );
}
