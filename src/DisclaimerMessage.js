import React from 'react'

import {
  Button,
  Icon,
  Message,
} from 'semantic-ui-react'

class DisclaimerMessage extends React.Component {
  render() {
    return (
      <Message info icon>
        <Icon name='info' />
        <Message.Content>
          <div>
            Сайт был создан как потенциально полезный сервис для тренировок команд «Что?
            Где? Когда?» в рамках оттачивания навыков работы с React.js.
          </div>
          <div style={{paddingTop: '1em'}}>
            Для новичков в этом деле: <a href='/what'>Что такое перебор в ЧГК.</a>.
          </div>
          <Button style={{marginTop: '1em'}} positive floated='right'>Я понял, спасибо</Button>
        </Message.Content>
      </Message>
    )
  }
}

export default DisclaimerMessage
