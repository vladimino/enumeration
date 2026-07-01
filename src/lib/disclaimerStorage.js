const STORAGE_KEY = 'enumeration.disclaimerDismissed'
const LEGACY_COOKIE = 'hide_disclaimer'

export const isDisclaimerDismissed = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export const dismissDisclaimer = () => {
  localStorage.setItem(STORAGE_KEY, 'true')
}

const readLegacyCookie = () =>
  document.cookie
    .split(';')
    .map((part) => part.trim())
    .some((part) => part === `${LEGACY_COOKIE}=true`)

const clearLegacyCookie = () => {
  document.cookie = `${LEGACY_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
}

export const migrateDisclaimerFromCookie = () => {
  if (isDisclaimerDismissed()) {
    return
  }

  if (!readLegacyCookie()) {
    return
  }

  dismissDisclaimer()
  clearLegacyCookie()
}
