import React from 'react'

import Body from './components/Body'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'

class App extends React.Component {
  render() {
    const categories = [
      {
        name: 'Категория 1',
        link: '/category/1',
      },
      {
        name: 'Категория 2',
        link: '/category/2',
      },
      {
        name: 'Категория 3',
        link: '/category/3',
      },
      {
        name: 'Категория 4',
        link: '/category/4',
      },
      {
        name: 'Категория 5',
        link: '/category/5',
      },
      {
        name: 'Категория 6',
        link: '/category/6',
      },
      {
        name: 'Категория 7',
        link: '/category/7',
      },
      {
        name: 'Категория 8',
        link: '/category/8',
      },
      {
        name: 'Категория 9',
        link: '/category/9',
      },
      {
        name: 'Категория 10',
        link: '/category/10',
      },
      {
        name: 'Категория 11',
        link: '/category/11',
      },
      {
        name: 'Категория 12',
        link: '/category/12',
      },
    ]

    return (
      <div>
        <MainMenu categories={categories} />
        <Body categories={categories} />
        <Footer />
      </div>
    )
  }
}

export default App
