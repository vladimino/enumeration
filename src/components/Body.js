import React from 'react'
import {Route} from 'react-router-dom'
import CategoryList from './CategoryList/CategoryList'
import PropTypes from 'prop-types'
import Rules from './Rules'
import {Container} from 'semantic-ui-react'

class Body extends React.Component {
  render() {
    return (
      <Container text style={{marginTop: '7em', minHeight: '350px'}}>
        <Route
          exact
          path='/'
          render={() => (
            <CategoryList
              categories={this.props.categories}
              isLoaded={this.props.isLoaded}
            />
          )}
        />
        <Route path='/rules' component={Rules} />
      </Container>
    )
  }
}

Body.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Body
