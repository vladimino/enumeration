import {useEffect, useMemo, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'
import {ProfileProvider} from './context/ProfileContext'
import {ThemeProvider} from './context/ThemeContext'
import {getCategoriesWithLists, loadCatalog} from './lib/catalog'
import './App.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const App = () => {
  const [catalog, setCatalog] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const categories = useMemo(() => getCategoriesWithLists(catalog), [catalog])

  useEffect(() => {
    loadCatalog()
      .then(setCatalog)
      .catch((error) => console.error(error))
      .finally(() => setIsLoaded(true))
  }, [])

  return (
    <ThemeProvider>
      <ProfileProvider>
        <Router basename={basename}>
          <div className='app-layout'>
            <MainMenu categories={categories} />
            <Body
              catalog={catalog}
              categories={categories}
              isLoaded={isLoaded}
            />
            <Footer />
          </div>
        </Router>
      </ProfileProvider>
    </ThemeProvider>
  )
}

export default App
