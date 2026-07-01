import {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from './ui/Icon'
import {publicUrl} from '../lib/publicUrl'
import {useProfile} from '../context/ProfileContext'
import {useTheme} from '../context/ThemeContext'
import {categoryPath} from '../lib/categories'
import './MainMenu.css'

const MainMenu = ({categories}) => {
  const {profile} = useProfile()
  const {isDark, toggleTheme} = useTheme()
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoriesOpen(false)
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const closeMenus = () => {
    setCategoriesOpen(false)
    setMenuOpen(false)
  }

  const themeLabel = isDark ? 'Включить светлую тему' : 'Включить тёмную тему'

  const categoriesList = categories?.map((category) => (
    <div className='item' key={category.slug}>
      <Link to={categoryPath(category.slug)} onClick={closeMenus}>
        <Icon name={category.icon} size='mini' className='category-icon' />
        <span className='text'>{category.name}</span>
      </Link>
    </div>
  ))

  const themeToggle = (extraClassName = '') => (
    <button
      type='button'
      className={`item main-menu__theme-toggle${extraClassName ? ` ${extraClassName}` : ''}`}
      onClick={toggleTheme}
      aria-label={themeLabel}
      title={themeLabel}
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
    </button>
  )

  return (
    <div ref={menuRef} className='ui fixed top inverted menu main-menu'>
      <div className='ui container main-menu__container'>
        <div className='header item main-menu__brand'>
          <Link
            to='/'
            className='main-menu__brand-link'
            onClick={closeMenus}
            title='Enumeration - главная страница проекта'
          >
            <img
              className='ui mini image main-menu__logo'
              src={publicUrl('logo.png')}
              alt='Enumeration'
            />
            <span className='main-menu__wordmark'>Enumeration</span>
          </Link>
        </div>

        <div className='main-menu__bar-actions'>
          {themeToggle('main-menu__theme-toggle--bar')}
          <button
            type='button'
            className='item main-menu__toggle'
            aria-label='Меню'
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'bars'} />
          </button>
        </div>

        <div
          className={`main-menu__items${menuOpen ? ' main-menu__items--open' : ''}`}
        >
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

          <div className='item'>
            <Link to='/rules' onClick={closeMenus}>
              Правила
            </Link>
          </div>

          <div className='right menu'>
            {themeToggle('main-menu__theme-toggle--menu')}
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
    </div>
  )
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default MainMenu
