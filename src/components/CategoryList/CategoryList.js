import React from 'react'

import CategoryCardGroup from './CategoryCardGroup'
import DisclaimerMessage from './DisclaimerMessage'
import PropTypes from 'prop-types'
import {Header} from 'semantic-ui-react'

class CategoryList extends React.Component {
  render() {
    return (
      <>
        <Header as='h1'>Тренировка техники перебора для игры в ЧГК</Header>
        <DisclaimerMessage />
        <p>
          Выберите интересующую категорию из верхнего меню или кликните по одной
          из списка ниже.
        </p>
        <div>
          <CategoryCardGroup
            categories={this.props.categories}
            isLoaded={this.props.isLoaded}
          />
        </div>
      </>
    )
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default CategoryList
