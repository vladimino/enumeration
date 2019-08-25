import React from 'react'

import {
    Icon,
    Message,
} from 'semantic-ui-react'

const EmptyCategoriesErrorMessage = () => (
  <Message error icon>
    <Icon name='warning' />
    <Message.Content>
      Ошибка загрузки категорий. Пожалуйста, сообщите разработчику.
    </Message.Content>
  </Message>
)

export default EmptyCategoriesErrorMessage
