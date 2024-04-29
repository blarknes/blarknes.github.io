export default async function preload(src) {
  const blob = await (await fetch(src)).blob();

  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject('Error: ' + error);
  });
}
