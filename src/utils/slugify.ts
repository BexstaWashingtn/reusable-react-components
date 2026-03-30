export function generateSlug(title: string, id: string): string {
  const slug = title
    .toLowerCase()
    .normalize("NFKD") // trennt Umlaute
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return `${slug}-${id}`;
}

export function extractId(slug: string): string {
  const match = slug.match(/-([^-]+)$/);
  return match ? match[1] : "";
}
