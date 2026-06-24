import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '../ui/Icon'
import {itemCountLabel, listPath} from '../../lib/categories'
import {getListRecord} from '../../lib/profileProgress'

const ListCard = ({list, categorySlug, profile}) => {
  const record = getListRecord(profile, list.slug)
  const size = list.size ?? record?.total

  return (
    <div className='ui card category-list-card'>
      <div className='content'>
        <div className='header'>
          <Link to={listPath(categorySlug, list.slug)}>{list.name}</Link>
        </div>
        {list.description && (
          <div className='description'>{list.description}</div>
        )}
        <div className='meta category-list-card__meta'>
          {size != null && (
            <div className='category-list-card__size'>
              {itemCountLabel(size)}
            </div>
          )}
          <div className='category-list-card__record' title='Твой рекорд'>
            <Icon name='trophy' />
            <span>{record ?? '—'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ListCard.propTypes = {
  list: PropTypes.object.isRequired,
  categorySlug: PropTypes.string.isRequired,
  profile: PropTypes.object,
}

export default ListCard
