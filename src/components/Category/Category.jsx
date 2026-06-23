import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import {useProfile} from '../../context/ProfileContext'
import {findCategoryBySlug, listCountLabel} from '../../lib/categories'
import ListCard from './ListCard'

import './Category.css'

const Category = ({categories, isLoaded}) => {
  const {slug} = useParams()
  const {profile} = useProfile()
  const category = findCategoryBySlug(categories, slug)

  if (!isLoaded || !profile) {
    return <div>Loading...</div>
  }

  if (!category) {
    return <div>Category data not found...</div>
  }

  const lists = category.lists ?? []
  const listLabel = listCountLabel(lists.length)

  return (
    <div className='category-page'>
      <header className='category-page__header'>
        <h1 className='ui header category-page__title'>{category.name}</h1>
        {category.description && (
          <p className='category-page__description'>{category.description}</p>
        )}
        <span className='ui label category-page__count'>{listLabel}</span>
      </header>

      {lists.length === 0 ? (
        <div className='ui message'>
          <p>Списки для этой категории скоро появятся.</p>
        </div>
      ) : (
        <div className='ui three stackable cards category-page__lists'>
          {lists.map((list) => (
            <ListCard
              key={list.slug}
              list={list}
              categorySlug={slug}
              profile={profile}
            />
          ))}
        </div>
      )}
    </div>
  )
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Category
