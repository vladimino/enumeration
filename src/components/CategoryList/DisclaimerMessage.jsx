import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../ui/Icon'
import {
  dismissDisclaimer,
  isDisclaimerDismissed,
  migrateDisclaimerFromCookie,
} from '../../lib/disclaimerStorage'

const DisclaimerMessage = () => {
  const [showMessage, setShowMessage] = useState(() => !isDisclaimerDismissed())

  useEffect(() => {
    migrateDisclaimerFromCookie()

    if (isDisclaimerDismissed()) {
      setShowMessage(false)
    }
  }, [])

  const handleClick = () => {
    dismissDisclaimer()
    setShowMessage(false)
  }

  if (!showMessage) {
    return null
  }

  return (
    <div className='ui info icon message'>
      <Icon name='info' />
      <div className='content'>
        <div>
          Сайт был создан как потенциально полезный сервис для тренировок команд
          «Что? Где? Когда?» в рамках оттачивания навыков работы с React.js.
        </div>
        <div style={{paddingTop: '1em'}}>
          Для новичков в этом деле:{' '}
          <Link to='/rules#what'>Что такое перебор в ЧГК.</Link>.
        </div>
        <button
          type='button'
          className='ui positive right floated button'
          style={{marginTop: '1em'}}
          onClick={handleClick}
        >
          Я понял, спасибо
        </button>
      </div>
    </div>
  )
}

export default DisclaimerMessage
