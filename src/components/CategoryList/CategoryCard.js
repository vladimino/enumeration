import React from 'react'

import PropTypes from 'prop-types'
import {Card, Icon} from 'semantic-ui-react'

import './Card.css'

class CategoryCard extends React.Component {
  render() {
    const category = this.props.category

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon name={category.icon} size='small' />
            <a href={process.env.PUBLIC_URL + category.link}>{category.name}</a>
          </Card.Header>
          <Card.Description>{category.description}</Card.Description>
          <Card.Meta>{category.subjects} тем</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

CategoryCard.propTypes = {
  category: PropTypes.PropTypes.object.isRequired,
}

export default CategoryCard
