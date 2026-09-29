export const SITE_URL = 'https://www.rhepl.com'

// Builds the canonical URL for a route. `path` must start with "/"; the
// homepage keeps its trailing slash, every other route drops it.
export function canonicalUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.replace(/\/+$/, '')}`
}
