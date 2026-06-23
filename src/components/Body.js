import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Category from './Category/Category'
import CategoryList from './CategoryList/CategoryList'
import NotFound from './NotFound'
import PropTypes from 'prop-types'
import Rules from './Rules'
import {Container} from 'semantic-ui-react'

class Body extends React.Component {
  render() {
    return (
      <Container text style={{marginTop: '7em', minHeight: '350px'}}>
        <Routes>
          <Route
            path='/'
            element={
              <CategoryList
                categories={this.props.categories}
                isLoaded={this.props.isLoaded}
              />
            }
          />
          <Route path='/rules' element={<Rules />} />
          <Route path='/category/:slug' element={<Category />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    )
  }
}

Body.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Body
