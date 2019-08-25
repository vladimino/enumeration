import React from 'react'

import PropTypes from 'prop-types'
import {Container, Menu, Image, Dropdown, Icon} from 'semantic-ui-react'

class MainMenu extends React.Component {
  render() {
    const categoriesList = !this.props.categories
      ? null
      : this.props.categories.map((category, index) => (
          <Dropdown.Item as='a' href={process.env.PUBLIC_URL + category.link} key={index}>
            <Icon name={category.icon} size='mini' />
            <span className='text'>{category.name}</span>
          </Dropdown.Item>
        ))

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href={process.env.PUBLIC_URL} header>
            <Image size='mini' src={process.env.PUBLIC_URL + '/logo.png'} style={{marginRight: '1.5em'}} />
            Главная
          </Menu.Item>

          <Menu.Item as='a' href={process.env.PUBLIC_URL + '/rules'}>
            Правила
          </Menu.Item>

          <Dropdown item simple text='Категории'>
            <Dropdown.Menu>{categoriesList}</Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    )
  }
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default MainMenu
