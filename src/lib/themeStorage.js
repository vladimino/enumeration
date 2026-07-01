const STORAGE_KEY = 'enumeration.theme'

export const THEMES = {
  light: 'light',
  dark: 'dark',
}

export const loadTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === THEMES.dark ? THEMES.dark : THEMES.light
  } catch {
    return THEMES.light
  }
}

export const saveTheme = (theme) => {
  localStorage.setItem(STORAGE_KEY, theme)
}

export const applyTheme = (theme) => {
  document.documentElement.dataset.theme =
    theme === THEMES.dark ? THEMES.dark : THEMES.light
}
