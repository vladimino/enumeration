import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {applyTheme, loadTheme, saveTheme, THEMES} from '../lib/themeStorage'

const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(loadTheme)

  useEffect(() => {
    applyTheme(theme)
    saveTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) =>
      current === THEMES.dark ? THEMES.light : THEMES.dark
    )
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === THEMES.dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
