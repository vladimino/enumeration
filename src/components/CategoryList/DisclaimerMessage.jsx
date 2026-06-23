import React from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Icon from '../ui/Icon'

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
      <div className='ui info icon message'>
        <Icon name='info' />
        <div className='content'>
          <div>
            Сайт был создан как потенциально полезный сервис для тренировок
            команд «Что? Где? Когда?» в рамках оттачивания навыков работы с
            React.js.
          </div>
          <div style={{paddingTop: '1em'}}>
            Для новичков в этом деле:{' '}
            <Link to='/rules#what'>Что такое перебор в ЧГК.</Link>.
          </div>
          <button
            type='button'
            className='ui positive right floated button'
            style={{marginTop: '1em'}}
            onClick={this.handleClick}
          >
            Я понял, спасибо
          </button>
        </div>
      </div>
    )
  }
}

export default DisclaimerMessage
