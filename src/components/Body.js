import React from 'react'
import {
  Container,
  Header,
  Button,
  Message,
  Icon,
  Divider,
} from 'semantic-ui-react'

const Body = () => (
  <Container text style={{marginTop: '7em'}}>
    <Header as='h1'>Тренировка перебора для ЧГК</Header>
    <Message info icon>
      <Icon name='info' />
      <Message.Content>
        Этот сайт был создан как полезный сервис для тренировок команд «Что?
        Где? Когда?» в рамках оттачивания навыков работы с React.js.
      </Message.Content>
    </Message>
    <p>
      Выберите интересующую категорию из верхнего меню или кликните по одной из
      кнопок ниже.
    </p>
    <div>
      <Button.Group basic fluid widths='4' size='big' color='blue'>
        <Button>Категория 1</Button>
        <Button>Категория 2</Button>
        <Button>Категория 3</Button>
        <Button>Категория 4</Button>
      </Button.Group>
      <Divider />
      <Button.Group basic fluid widths='4' size='big' color='blue'>
        <Button>Категория 5</Button>
        <Button>Категория 6</Button>
        <Button>Категория 7</Button>
        <Button>Категория 8</Button>
      </Button.Group>
      <Divider />
      <Button.Group basic fluid widths='4' size='big' color='blue'>
        <Button>Категория 9</Button>
        <Button>Категория 10</Button>
        <Button>Категория 11</Button>
        <Button disabled />
      </Button.Group>
    </div>
  </Container>
)

export default Body
