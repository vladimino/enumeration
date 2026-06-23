import React from 'react'

import CategoryCard from './CategoryCard'
import CategoryListPlaceholder from './CategoryListPlaceholder'
import EmptyCategoriesErrorMessage from './EmptyCategoriesErrorMessage'
import PropTypes from 'prop-types'

class CategoryCardGroup extends React.Component {
  render() {
    if (!this.props.isLoaded) {
      return <CategoryListPlaceholder />
    }

    if (!this.props.categories || this.props.categories.length === 0) {
      return <EmptyCategoriesErrorMessage />
    }

    const categoryCards = this.props.categories.map((category, index) => (
      <CategoryCard category={category} key={index} />
    ))

    return <div className='ui three stackable cards'>{categoryCards}</div>
  }
}

CategoryCardGroup.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default CategoryCardGroup
