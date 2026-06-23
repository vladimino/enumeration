import {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from './ui/Icon'
import {useProfile} from '../context/ProfileContext'
import {categoryPath} from '../lib/categories'
import './MainMenu.css'

const MainMenu = ({categories}) => {
  const {profile} = useProfile()
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoriesOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const closeMenus = () => setCategoriesOpen(false)

  const categoriesList = categories?.map((category) => (
    <div className='item' key={category.slug}>
      <Link
        to={categoryPath(category.slug)}
        style={{color: '#000'}}
        onClick={closeMenus}
      >
        <Icon name={category.icon} size='mini' />
        <span className='text'>{category.name}</span>
      </Link>
    </div>
  ))

  return (
    <div className='ui fixed top inverted menu main-menu'>
      <div className='ui container'>
        <div className='header item'>
          <Link to='/' onClick={closeMenus}>
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
          <Link to='/rules' onClick={closeMenus}>
            Правила
          </Link>
        </div>

        <div
          ref={dropdownRef}
          className={`ui dropdown item${categoriesOpen ? ' active' : ''}`}
          onClick={() => setCategoriesOpen((open) => !open)}
        >
          <span className='text'>Категории</span>
          <i className='dropdown icon' aria-hidden='true' />
          <div className='menu' onClick={(e) => e.stopPropagation()}>
            {categoriesList}
          </div>
        </div>

        <div className='right menu'>
          <Link
            to='/profile'
            className={`item main-menu__profile${profile ? '' : ' main-menu__profile--loading'}`}
            onClick={closeMenus}
          >
            <Icon name='user' />
            <span>{profile?.username ?? '...'}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default MainMenu
