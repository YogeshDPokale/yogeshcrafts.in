import { publicCareer } from "./career";

// Shared emphasis rules; content stays plain text in the public dataset.
const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = [...publicCareer.highlights].sort((a, b) => b.length - a.length).map(escapePattern).join("|");
export function highlightSegments(text: string) {
  const matcher = new RegExp(`(?<![A-Za-z0-9])(${pattern})(?![A-Za-z0-9])`, "gi");
  const segments: { text: string; emphasis: boolean }[] = [];
  let cursor = 0;
  for (const match of text.matchAll(matcher)) {
    const start = match.index!;
    if (start > cursor) segments.push({ text: text.slice(cursor, start), emphasis: false });
    segments.push({ text: match[0], emphasis: true });
    cursor = start + match[0].length;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), emphasis: false });
  return segments;
}
