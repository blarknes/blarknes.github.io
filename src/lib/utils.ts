/**
 * Delays the current thread by X amount of milisseconds.
 *
 * @param time the amount of milisseconds to be waited
 */
export async function delay(time: number = 500): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Load the desired asset and get the blob path.
 *
 * @param src the asset src path
 * @returns The loaded asset.
 */
export async function load(src: string): Promise<ImageSrc> {
  const data = await fetch(src);
  const blob = await data.blob();

  const reader = new FileReader();
  const image = await new Promise<ImageSrc>((resolve) => {
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => resolve(null);

    reader.readAsDataURL(blob);
  });

  return image;
}
