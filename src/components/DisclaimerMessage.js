import React from 'react'

import Cookies from 'js-cookie'
import {Button, Icon, Message} from 'semantic-ui-react'

class DisclaimerMessage extends React.Component {
  state = {
    showMessage: true,
  }

  componentDidMount() {
    if (Cookies.get('hide_disclaimer')) {
      this.setState({
        showMessage: false,
      })
    }
  }

  handleClick = () => {
    Cookies.set('hide_disclaimer', true)
    this.setState({
      showMessage: false,
    })
  }

  render() {
    if (!this.state.showMessage) {
      return null
    }

    return (
      <Message info icon>
        <Icon name='info' />
        <Message.Content>
          <div>
            Сайт был создан как потенциально полезный сервис для тренировок
            команд «Что? Где? Когда?» в рамках оттачивания навыков работы с
            React.js.
          </div>
          <div style={{paddingTop: '1em'}}>
            Для новичков в этом деле:{' '}
            <a href='/what'>Что такое перебор в ЧГК.</a>.
          </div>
          <Button
            style={{marginTop: '1em'}}
            positive
            floated='right'
            onClick={this.handleClick}
          >
            Я понял, спасибо
          </Button>
        </Message.Content>
      </Message>
    )
  }
}

export default DisclaimerMessage
