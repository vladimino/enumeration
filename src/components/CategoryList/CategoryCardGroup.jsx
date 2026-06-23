import React from 'react'

import CategoryCard from './CategoryCard'
import CategoryListPlaceholder from './CategoryListPlaceholder'
import EmptyCategoriesErrorMessage from './EmptyCategoriesErrorMessage'
import PropTypes from 'prop-types'
import {Card} from 'semantic-ui-react'

class CategoryCardGroup extends React.Component {
  columns = 3 // Cards per row

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

    return (
      <Card.Group itemsPerRow={this.columns} stackable>
        {categoryCards}
      </Card.Group>
    )
  }
}

CategoryCardGroup.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default CategoryCardGroup
