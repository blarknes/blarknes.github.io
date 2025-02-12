/**
 * Delays the current thread for the desired time.
 * 
 * @param time the desired delay in milliseconds
 */
export default async function sleep(time) {
  await new Promise(r => setTimeout(r, time));
}
