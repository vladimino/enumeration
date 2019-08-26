import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CategoryList from './CategoryList/CategoryList'
import NotFound from './NotFound'
import PropTypes from 'prop-types'
import Rules from './Rules'
import {Container} from 'semantic-ui-react'

class Body extends React.Component {
  render() {
    return (
      <Container text style={{marginTop: '7em', minHeight: '350px'}}>
        <Switch>
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
          <Route component={NotFound} />
        </Switch>
      </Container>
    )
  }
}

Body.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Body
