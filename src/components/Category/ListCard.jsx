import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {itemCountLabel, listPath} from '../../lib/categories'
import {getListRecord} from '../../lib/profileProgress'

const ListCard = ({list, categorySlug, profile}) => {
  const record = getListRecord(profile, list.slug)
  const size = list.size ?? record?.total

  const meta = size
    ? `${itemCountLabel(size)} · ${
        record !== null
          ? `твой рекорд: ${record} из ${size}`
          : 'рекорд пока нет'
      }`
    : record !== null
      ? `твой рекорд: ${record}`
      : 'рекорд пока нет'

  return (
    <div className='ui card category-list-card'>
      <div className='content'>
        <div className='header'>
          <Link to={listPath(categorySlug, list.slug)}>{list.name}</Link>
        </div>
        {list.description && (
          <div className='description'>{list.description}</div>
        )}
        <div className='meta'>{meta}</div>
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
