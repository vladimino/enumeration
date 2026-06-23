import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from './ui/Icon'

class MainMenu extends React.Component {
  state = {
    categoriesOpen: false,
  }

  toggleCategories = () => {
    this.setState((state) => ({categoriesOpen: !state.categoriesOpen}))
  }

  closeCategories = () => {
    this.setState({categoriesOpen: false})
  }

  render() {
    const categoriesList = !this.props.categories
      ? null
      : this.props.categories.map((category, index) => (
          <div className='item' key={index} onClick={this.closeCategories}>
            <Link to={category.link} style={{color: '#000'}}>
              <Icon name={category.icon} size='mini' />
              <span className='text'>{category.name}</span>
            </Link>
          </div>
        ))

    const dropdownClassName = [
      'ui',
      'dropdown',
      'item',
      this.state.categoriesOpen ? 'active visible' : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className='ui fixed top inverted menu'>
        <div className='ui container'>
          <div className='header item'>
            <Link to='/'>
              <img
                className='ui mini image'
                src={`${import.meta.env.BASE_URL}logo.png`}
                style={{marginRight: '1.5em'}}
                alt='Enumeration'
                title='Enumeration - главная страница проекта'
              />
            </Link>
          </div>

          <div className='item'>
            <Link to='/rules'>Правила</Link>
          </div>

          <div className={dropdownClassName} onClick={this.toggleCategories}>
            <span className='text'>Категории</span>
            <i className='dropdown icon' aria-hidden='true' />
            <div className='menu'>{categoriesList}</div>
          </div>
        </div>
      </div>
    )
  }
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default MainMenu
