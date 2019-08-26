import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Container, Menu, Image, Dropdown, Icon} from 'semantic-ui-react'

class MainMenu extends React.Component {
  render() {
    const categoriesList = !this.props.categories
      ? null
      : this.props.categories.map((category, index) => (
          <Dropdown.Item key={index}>
            <Link to={category.link} style={{color: '#000'}}>
              <Icon name={category.icon} size='mini' />
              <span className='text'>{category.name}</span>
            </Link>
          </Dropdown.Item>
        ))

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Link to='/'>
              <Image
                size='mini'
                src={process.env.PUBLIC_URL + '/logo.png'}
                style={{marginRight: '1.5em'}}
                title='Enumeration - главная страница проекта'
              />
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='/rules/'>Правила</Link>
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
