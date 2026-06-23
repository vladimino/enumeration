import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  return (
    <>
      <h1 className='ui header'>404</h1>
      <h3 className='ui sub header'>Страница не найдена</h3>
      <p>
        Хм, очень интересно, как Вы сюда попали... Если Вы все же убеждены, что
        страница <code>{location.pathname}</code> должна работать, пожалуйста,
        сообщите об этом разработчику.
      </p>
      <p>
        Воспользуйтесь верхним меню для возврата в ойкумену или кликните{' '}
        <Link to='/'>здесь</Link> для перехода на главную.
      </p>
    </>
  )
}

export default NotFound
