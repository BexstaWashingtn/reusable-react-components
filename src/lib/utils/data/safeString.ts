export function safeString(value: unknown, fallback = "") {
  if (typeof value !== "string") return fallback;

  const trimmed = value.trim();

  return trimmed !== "" ? trimmed : fallback;
}
