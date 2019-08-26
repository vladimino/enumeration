import React from 'react'
import {Link} from 'react-router-dom'
import {Header, HeaderSubheader} from 'semantic-ui-react'


const NotFound = ({ location }) => (
  <>
    <Header as='h1'>404</Header>
    <HeaderSubheader as='h3'>Страница не найдена</HeaderSubheader>
    <p>Хм, очень интересно, как Вы сюда попали... Если Вы все же убеждены, что страница <code>{location.pathname}</code> должна работать, пожалуйста, сообщите об этом разработчику.</p>
    <p>Воспользуйтесь верхним меню для возврата в ойкумену или кликните <Link to='/'>здесь</Link> для перехода на главную.</p>
  </>
)

export default NotFound
