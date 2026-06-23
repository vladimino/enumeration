import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Icon from '../ui/Icon'

const dataUrl = `${import.meta.env.BASE_URL}data/categories/`

const Category = () => {
  const {slug} = useParams()
  const [category, setCategory] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    setCategory(null)
    setIsLoaded(false)

    axios
      .get(`${dataUrl}${slug}.json`)
      .then((res) => {
        if (!cancelled) {
          setCategory(res.data)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        if (!cancelled) {
          setIsLoaded(true)
        }
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!category) {
    return <div>Category data not found...</div>
  }

  return (
    <>
      <h1 className='ui icon header'>
        <Icon name={category.icon} />
        <div className='content'>
          Категория {category.name} ({category.subjects})
          <div className='sub header'>{category.description}</div>
        </div>
      </h1>
      <p>Выберите тему из списка ниже.</p>
      <div>А Б В</div>
    </>
  )
}

export default Category
