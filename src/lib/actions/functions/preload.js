export default async function preload(src) {
  const response = await fetch(src);
  const blob = await response.blob();

  return new Promise(function (resolve, reject) {
    const reader = new FileReader();

    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
