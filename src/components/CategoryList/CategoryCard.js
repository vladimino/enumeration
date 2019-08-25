import React from 'react'

import PropTypes from 'prop-types'
import {Button, Card, Icon} from 'semantic-ui-react'

class CategoryCard extends React.Component {
  render() {
    const category = this.props.category

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon name={category.icon} size='small' />
            {category.name}
          </Card.Header>
          <Card.Description>{category.description}</Card.Description>
          <Card.Meta>{category.subjects} тем</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button basic color='blue' as='a' href={category.link}>
              Выбрать тему
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

CategoryCard.propTypes = {
  category: PropTypes.PropTypes.object.isRequired,
}

export default CategoryCard
