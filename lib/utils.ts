export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatYearRange(start: number, end?: number) {
  if (!end || end === start) return String(start);
  return `${start}–${end}`;
}
