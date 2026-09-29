import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Bundled locally (assets/fonts/Anton-Regular.ttf, downloaded from Google
// Fonts) rather than fetched at request/build time — a network fetch here
// once took down the entire production build when it timed out on Vercel's
// build infra (this route's prerender failure is fatal to `next build`).
export async function loadAntonFont(): Promise<Buffer> {
  return readFile(join(process.cwd(), "assets/fonts/Anton-Regular.ttf"));
}
