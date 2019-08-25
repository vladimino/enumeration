import React from 'react'

import CategoryButton from './CategoryButton'
import EmptyCategoriesErrorMessage from './EmptyCategoriesErrorMessage'
import PropTypes from 'prop-types'
import {Button} from 'semantic-ui-react'

// Buttons per row
const COLUMNS = 4

class CategoryButtonGroup extends React.Component {
  getButtonsSetFromIndex(index) {
    const categoriesSlice = this.props.categories.slice(index, index + COLUMNS)

    return <CategoryButton categories={categoriesSlice} />
  }

  getGroupedCategoryButtons() {
    const groupedCategoryButtons = []
    for (let i = 0; i < this.props.categories.length; i += COLUMNS) {
      groupedCategoryButtons.push(this.getButtonsSetFromIndex(i))
    }

    return groupedCategoryButtons
  }

  render() {
    if (this.props.categories.length === 0) {
      return <EmptyCategoriesErrorMessage />
    }

    const groupedCategoryButtons = this.getGroupedCategoryButtons()

    return groupedCategoryButtons.map((buttons, index) => (
      <Button.Group
        style={{border: 'none'}}
        widths={COLUMNS}
        size='big'
        basic
        color='blue'
        key={index}
      >
        {buttons}
      </Button.Group>
    ))
  }
}

CategoryButtonGroup.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CategoryButtonGroup
