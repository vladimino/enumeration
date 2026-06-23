import {Link, useLocation} from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  return (
    <>
      <h1 className='ui header'>404</h1>
      <h3 className='ui sub header'>Страница не найдена</h3>
      <p>
        Хм, очень интересно, как ты сюда попал... Если ты всё же убеждён, что
        страница <code>{location.pathname}</code> должна работать, пожалуйста,
        сообщи об этом разработчику.
      </p>
      <p>
        Воспользуйся верхним меню для возврата в ойкумену или кликни{' '}
        <Link to='/'>здесь</Link> для перехода на главную.
      </p>
    </>
  )
}

export default NotFound
