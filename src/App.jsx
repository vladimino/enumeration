import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

class App extends React.Component {
  dataUrl = `${import.meta.env.BASE_URL}data/categories.json`
  state = {
    categories: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios
      .get(this.dataUrl)
      .then((res) => this.setState({categories: res.data}))
      .catch((error) => console.error(error))
      .finally(() => this.setState({isLoaded: true}))
  }

  render() {
    return (
      <div>
        <Router basename={basename}>
          <MainMenu categories={this.state.categories} />
          <Body
            categories={this.state.categories}
            isLoaded={this.state.isLoaded}
          />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
