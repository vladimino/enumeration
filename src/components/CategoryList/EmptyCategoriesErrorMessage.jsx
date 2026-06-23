import Icon from '../ui/Icon'

const EmptyCategoriesErrorMessage = () => (
  <div className='ui error icon message'>
    <Icon name='warning' />
    <div className='content'>
      Ошибка загрузки категорий. Сообщи разработчику, если проблема повторяется.
    </div>
  </div>
)

export default EmptyCategoriesErrorMessage
