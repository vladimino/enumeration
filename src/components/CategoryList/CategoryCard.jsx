import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '../ui/Icon'
import {categoryPath, listCountLabel} from '../../lib/categories'

import './Card.css'

const CategoryCard = ({category}) => (
  <div className='ui card'>
    <div className='content'>
      <div className='header'>
        <Icon name={category.icon} size='small' />
        <Link to={categoryPath(category.slug)}>{category.name}</Link>
      </div>
      <div className='description'>{category.description}</div>
      <div className='meta'>{listCountLabel(category.lists?.length ?? 0)}</div>
    </div>
  </div>
)

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
}

export default CategoryCard
