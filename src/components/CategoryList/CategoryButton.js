import React from 'react'

import PropTypes from 'prop-types'
import {Button} from 'semantic-ui-react'

class CategoryButton extends React.Component {
  render() {
    return this.props.categories.map((category, index) => (
      <Button
        style={{margin: '0.05em'}}
        key={index}
        as='a'
        href={category.link}
      >
        {category.name}
      </Button>
    ))
  }
}

CategoryButton.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CategoryButton
