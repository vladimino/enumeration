import {Route, Routes} from 'react-router-dom'
import PropTypes from 'prop-types'
import Category from './Category/Category'
import CategoryList from './CategoryList/CategoryList'
import ListGame from './ListGame/ListGame'
import NotFound from './NotFound'
import Profile from './Profile/Profile'
import Rules from './Rules'

const Body = ({catalog, categories, isLoaded}) => (
  <div
    className='ui text container'
    style={{marginTop: '7em', minHeight: '350px'}}
  >
    <Routes>
      <Route
        path='/'
        element={<CategoryList categories={categories} isLoaded={isLoaded} />}
      />
      <Route path='/rules' element={<Rules />} />
      <Route path='/profile' element={<Profile categories={categories} />} />
      <Route
        path='/category/:slug'
        element={<Category categories={categories} isLoaded={isLoaded} />}
      />
      <Route
        path='/category/:categorySlug/:listSlug'
        element={
          <ListGame
            catalog={catalog}
            categories={categories}
            isLoaded={isLoaded}
          />
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
)

Body.propTypes = {
  catalog: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Body
