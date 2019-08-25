import React from 'react'
import {Grid, Placeholder, Segment} from 'semantic-ui-react'

const CategoryListPlaceholder = () => {
  const columns = [1, 2, 3].map(num => (
    <Grid.Column key={num}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
  ))

  return (
    <Grid columns={3} stackable>
      {columns}
    </Grid>
  )
}

export default CategoryListPlaceholder
