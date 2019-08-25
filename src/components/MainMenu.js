import React from 'react'

import PropTypes from 'prop-types'
import {Container, Menu, Image, Dropdown} from 'semantic-ui-react'

class MainMenu extends React.Component {
  render() {
    const categoriesList = !this.props.categories
      ? null
      : this.props.categories.map((category, index) => (
          <Dropdown.Item as='a' href={category.link} key={index}>
            <span className='text'>{category.name}</span>
          </Dropdown.Item>
        ))

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href='/' header>
            <Image size='mini' src='/logo.png' style={{marginRight: '1.5em'}} />
            Главная
          </Menu.Item>

          <Dropdown item simple text='Категории'>
            <Dropdown.Menu>{categoriesList}</Dropdown.Menu>
          </Dropdown>

          <Menu.Item as='a' href='/what'>
            Что такое перебор
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default MainMenu
