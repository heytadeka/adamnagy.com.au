const FONT_CSS_URL = "https://fonts.googleapis.com/css2?family=Anton&display=swap";

// Requesting the Google Fonts CSS API without a browser user-agent makes it
// fall back to serving a .ttf (its oldest, most-compatible format) instead of
// woff2 — which is what Satori (used by next/og's ImageResponse) can parse.
export async function loadAntonFont(): Promise<ArrayBuffer> {
  const css = await fetch(FONT_CSS_URL).then((res) => res.text());
  const fontUrl = css.match(/url\((.+?)\)/)?.[1];
  if (!fontUrl) {
    throw new Error("loadAntonFont: could not locate a font src in the Google Fonts CSS response");
  }
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}
