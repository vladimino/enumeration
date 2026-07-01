export const publicUrl = (path) => {
  const base = import.meta.env.BASE_URL
  const normalizedPath = path.replace(/^\//, '')
  const normalizedBase = base.endsWith('/') ? base : `${base}/`

  return `${normalizedBase}${normalizedPath}`
}
