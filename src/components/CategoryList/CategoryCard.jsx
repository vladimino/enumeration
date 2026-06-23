import React from 'react'
import {Link} from 'react-router-dom'
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
            <Link to={category.link}>{category.name}</Link>
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
