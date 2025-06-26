export function joinValuesWithSlash(
  obj: Record<string, string | number>
): string {
  return Object.values(obj)
    .map((value) => `/${value}`)
    .join("");
}

export function toQueryString(params: Record<string, string>): string {
  const query = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");

  return query ? `?${query}` : "";
}
