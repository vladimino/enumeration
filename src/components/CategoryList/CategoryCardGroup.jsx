import PropTypes from 'prop-types'
import CategoryCard from './CategoryCard'
import CategoryListPlaceholder from './CategoryListPlaceholder'
import EmptyCategoriesErrorMessage from './EmptyCategoriesErrorMessage'

const CategoryCardGroup = ({categories, isLoaded}) => {
  if (!isLoaded) {
    return <CategoryListPlaceholder />
  }

  if (!categories || categories.length === 0) {
    return <EmptyCategoriesErrorMessage />
  }

  return (
    <div className='ui three stackable cards category-list__cards'>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.slug} />
      ))}
    </div>
  )
}

CategoryCardGroup.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default CategoryCardGroup
