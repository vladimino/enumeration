import {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {Link, useParams} from 'react-router-dom'
import {getListInCategory, loadFullList} from '../../lib/catalog'
import {categoryPath, findCategoryBySlug} from '../../lib/categories'
import {reviewAnswers} from '../../lib/answerMatching'
import Icon from '../ui/Icon'

import './ListGame.css'

const ListGame = ({catalog, categories, isLoaded}) => {
  const {categorySlug, listSlug} = useParams()
  const inputRef = useRef(null)
  const [list, setList] = useState(null)
  const [listError, setListError] = useState(false)
  const [phase, setPhase] = useState('playing')
  const [draft, setDraft] = useState('')
  const [answers, setAnswers] = useState([])
  const [review, setReview] = useState(null)
  const [showMissed, setShowMissed] = useState(false)

  const listStub = catalog
    ? getListInCategory(catalog, categorySlug, listSlug)
    : null
  const category = findCategoryBySlug(categories, categorySlug)

  useEffect(() => {
    if (!isLoaded || !listStub) {
      return
    }

    let cancelled = false
    setList(null)
    setListError(false)
    setPhase('playing')
    setDraft('')
    setAnswers([])
    setReview(null)
    setShowMissed(false)

    loadFullList(catalog, listSlug)
      .then((loadedList) => {
        if (!cancelled) {
          setList(loadedList)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setListError(true)
        }
      })

    return () => {
      cancelled = true
    }
  }, [catalog, isLoaded, listStub, listSlug])

  useEffect(() => {
    if (phase === 'playing' && list) {
      inputRef.current?.focus()
    }
  }, [phase, list])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!listStub) {
    return <div>Список не найден...</div>
  }

  if (listError) {
    return <div>Не удалось загрузить список...</div>
  }

  if (!list) {
    return <div>Loading...</div>
  }

  const addAnswer = () => {
    const value = draft.trim()
    if (!value) {
      return
    }

    setAnswers((current) => [...current, value])
    setDraft('')
    inputRef.current?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addAnswer()
  }

  const handleFinish = () => {
    const result = reviewAnswers(answers, list.answers ?? [])
    setReview(result)
    setShowMissed(false)
    setPhase('review')
  }

  const handlePlayAgain = () => {
    setPhase('playing')
    setDraft('')
    setAnswers([])
    setReview(null)
    setShowMissed(false)
  }

  return (
    <div className='list-game'>
      <p>
        <Link to={categoryPath(categorySlug)}>
          ← Назад к категории{category ? ` «${category.name}»` : ''}
        </Link>
      </p>

      <h1 className='ui header'>{list.name}</h1>
      {list.description && <p>{list.description}</p>}

      {phase === 'playing' ? (
        <>
          {answers.length > 0 && (
            <div className='list-game__entered-panel'>
              <div className='ui relaxed list list-game__entered-list'>
                {answers.map((answer, index) => (
                  <div className='item' key={`${answer}-${index}`}>
                    <div className='content'>{answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form className='list-game__input-row' onSubmit={handleSubmit}>
            <div className='ui fluid input'>
              <input
                ref={inputRef}
                type='text'
                value={draft}
                placeholder='Введите ответ'
                onChange={(event) => setDraft(event.target.value)}
              />
            </div>
            <button className='ui button' type='submit'>
              Добавить
            </button>
          </form>

          <button
            className='ui huge primary fluid button list-game__finish'
            type='button'
            onClick={handleFinish}
          >
            Я закончил
          </button>
        </>
      ) : (
        <>
          <div className='list-game__score'>
            Верно: <strong>{review.score}</strong> из {review.total}
          </div>

          <div className='ui relaxed list list-game__review-list'>
            {review.reviewed.map((item, index) => (
              <div className='item' key={`${item.text}-${index}`}>
                <Icon
                  name={
                    item.status === 'correct'
                      ? 'green check circle'
                      : 'red times circle'
                  }
                />
                <div className='content'>{item.text}</div>
              </div>
            ))}
          </div>

          {review.reviewed.length === 0 && (
            <p className='ui message'>Вы не ввели ни одного ответа.</p>
          )}

          {review.missed.length > 0 && (
            <div className='list-game__missed'>
              {!showMissed ? (
                <button
                  className='ui button'
                  type='button'
                  onClick={() => setShowMissed(true)}
                >
                  Показать пропущенные
                </button>
              ) : (
                <div className='list-game__missed-panel'>
                  <h3 className='ui small header'>
                    Пропущенные ответы ({review.missed.length})
                  </h3>
                  <div className='ui labels'>
                    {review.missed.map((answer) => (
                      <span className='ui label' key={answer}>
                        {answer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            className='ui huge primary fluid button list-game__finish'
            type='button'
            onClick={handlePlayAgain}
          >
            Играть снова
          </button>
        </>
      )}
    </div>
  )
}

ListGame.propTypes = {
  catalog: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
}

export default ListGame
