import React from 'react'
import {Segment, Container, Image, List} from 'semantic-ui-react'

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{margin: '5em 0em 0em', padding: '3em 0em'}}
  >
    <Container textAlign='center'>
      <Image centered size='mini' src={process.env.PUBLIC_URL + '/logo.png'} />
      <List horizontal inverted divided link size='small'>
        <List.Item>&copy; Владимир Белокур aka vladimino, 2019</List.Item>
      </List>
    </Container>
  </Segment>
)

export default Footer
