import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Icon from '../ui/Icon'
import {
  categoryPath,
  findCategoryBySlug,
  listCountLabel,
  listPath,
} from '../../lib/categories'

const Category = ({categories, isLoaded}) => {
  const {slug} = useParams()
  const category = findCategoryBySlug(categories, slug)

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!category) {
    return <div>Category data not found...</div>
  }

  const lists = category.lists ?? []
  const listLabel = listCountLabel(lists.length)

  return (
    <>
      <h1 className='ui icon header'>
        <Icon name={category.icon} />
        <div className='content'>
          Категория {category.name} ({listLabel})
          <div className='sub header'>{category.description}</div>
        </div>
      </h1>
      <p>Выбери список для тренировки:</p>

      {lists.length === 0 ? (
        <div className='ui message'>
          <p>Списки для этой категории скоро появятся.</p>
        </div>
      ) : (
        <div className='ui relaxed divided list'>
          {lists.map((list) => (
            <div className='item' key={list.slug}>
              <div className='content'>
                <div className='header'>
                  <Link to={listPath(slug, list.slug)}>{list.name}</Link>
                </div>
                {list.description && (
                  <div className='description'>{list.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Category
