import React from 'react'

import axios from 'axios'
import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'

class App extends React.Component {
  dataUrl = '../data/categories.json'
  state = {
    categories: [],
  }

  componentDidMount() {
    axios
      .get(this.dataUrl)
      .then(res => this.setState({categories: res.data}))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <MainMenu categories={this.state.categories} />
        <Body categories={this.state.categories} />
        <Footer />
      </div>
    )
  }
}

export default App
