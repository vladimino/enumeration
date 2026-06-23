import PropTypes from 'prop-types'
import CategoryCardGroup from './CategoryCardGroup'
import DisclaimerMessage from './DisclaimerMessage'

const CategoryList = ({categories, isLoaded}) => (
  <>
    <h1 className='ui header'>Тренировка техники перебора для игры в ЧГК</h1>
    <DisclaimerMessage />
    <p>
      Выберите интересующую категорию из верхнего меню или кликните по одной из
      списка ниже.
    </p>
    <div>
      <CategoryCardGroup categories={categories} isLoaded={isLoaded} />
    </div>
  </>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default CategoryList
