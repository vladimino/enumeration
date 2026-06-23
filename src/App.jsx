import {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'
import {ProfileProvider} from './context/ProfileContext'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
const dataUrl = `${import.meta.env.BASE_URL}data/categories.json`

const App = () => {
  const [categories, setCategories] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((res) => setCategories(res.data))
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
