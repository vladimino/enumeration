import React from 'react'

import CategoryList from './CategoryList/CategoryList'
import DisclaimerMessage from '../DisclaimerMessage';
import PropTypes from 'prop-types'
import {
  Container,
  Header,
} from 'semantic-ui-react'

class Body extends React.Component {
  render() {
    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>Тренировка техники перебора для игры в ЧГК</Header>
        <DisclaimerMessage />
        <CategoryList categories={this.props.categories} />
      </Container>
    )
  }
}

Body.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Body
