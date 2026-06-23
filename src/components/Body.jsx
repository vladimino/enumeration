import {Route, Routes} from 'react-router-dom'
import PropTypes from 'prop-types'
import Category from './Category/Category'
import CategoryList from './CategoryList/CategoryList'
import NotFound from './NotFound'
import Profile from './Profile/Profile'
import Rules from './Rules'

const Body = ({categories, isLoaded}) => (
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
      <Route path='/profile' element={<Profile />} />
      <Route path='/category/:slug' element={<Category />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
)

Body.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default Body
