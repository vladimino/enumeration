import React from 'react'

import CategoryButtonGroup from './CategoryButtonGroup';
import PropTypes from 'prop-types'

class CategoryList extends React.Component {
  render() {
    return (
      <>
        <p>
          Выберите интересующую категорию из верхнего меню или кликните по одной из
          кнопок ниже.
        </p>
        <div>
          <CategoryButtonGroup categories={this.props.categories} />
        </div>
      </>
    )
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}
  
export default CategoryList
