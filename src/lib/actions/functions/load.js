/**
 * Loads the desired src asset.
 * 
 * @param src the asset src
 * @returns The loaded asset.
 */
export default async function load(src) {
  const response = await fetch(src);
  const blob = await response.blob();

  return new Promise(function (resolve, reject) {
    const reader = new FileReader();

    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
