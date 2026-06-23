import {useEffect, useMemo, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'
import {ProfileProvider} from './context/ProfileContext'
import {getCategoriesWithLists, loadCatalog} from './lib/catalog'

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
    <ProfileProvider>
      <Router basename={basename}>
        <MainMenu categories={categories} />
        <Body categories={categories} isLoaded={isLoaded} />
        <Footer />
      </Router>
    </ProfileProvider>
  )
}

export default App
