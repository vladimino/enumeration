import React from 'react'

import axios from 'axios'
import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'

class App extends React.Component {
  dataUrl = process.env.PUBLIC_URL + '/data/categories.json'
  state = {
    categories: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios
      .get(this.dataUrl)
      .then(res => this.setState({categories: res.data}))
      .catch(error => console.error(error))
      .finally(() => this.setState({isLoaded: true}))
  }

  render() {
    return (
      <div>
        <MainMenu categories={this.state.categories} />
        <Body
          categories={this.state.categories}
          isLoaded={this.state.isLoaded}
        />
        <Footer />
      </div>
    )
  }
}

export default App
