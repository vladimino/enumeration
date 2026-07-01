import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {applyTheme, loadTheme} from './lib/themeStorage'
import './theme.css'

applyTheme(loadTheme())

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
