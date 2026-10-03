import { highlightSegments } from "@/data/text-highlights";

export function Keywords({ text }: { text: string }) {
  return <>{highlightSegments(text).map((part, index) =>
    part.emphasis ? <strong key={index} className="font-semibold text-foreground">{part.text}</strong> : part.text
  )}</>;
}
