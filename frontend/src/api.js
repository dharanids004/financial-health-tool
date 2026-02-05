export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:5000/api/upload", {
    method: "POST",
    body: formData
  });

  return res.json();
}
