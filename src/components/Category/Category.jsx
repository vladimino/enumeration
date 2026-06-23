import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Header, Icon} from 'semantic-ui-react'

class CategoryView extends React.Component {
  dataUrl = `${import.meta.env.BASE_URL}data/categories/`
  state = {
    category: null,
    isLoaded: false,
  }

  componentDidMount = () => this.fetchCategoryData()

  componentWillUnmount = () => this.resetState()

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.fetchCategoryData()
    }
  }

  fetchCategoryData() {
    const slug = this.props.slug
    this.resetState()

    axios
      .get(this.dataUrl + slug + '.json')
      .then((res) => this.setState({category: res.data}))
      .catch((error) => console.error(error))
      .finally(() => this.setState({isLoaded: true}))
  }

  resetState = () =>
    this.setState({
      category: null,
      isLoaded: false,
    })

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    }

    const category = this.state.category

    if (!category) {
      return <div>Category data not found...</div>
    }

    return (
      <>
        <Header as='h1' icon>
          <Icon name={category.icon} />
          Категория {category.name} ({category.subjects})
          <Header.Subheader>{category.description}</Header.Subheader>
        </Header>
        <p>Выберите тему из списка ниже.</p>
        <div>А Б В</div>
      </>
    )
  }
}

const Category = () => {
  const {slug} = useParams()
  return <CategoryView slug={slug} />
}

export default Category
