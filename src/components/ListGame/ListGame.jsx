import {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {Link, useParams} from 'react-router-dom'
import {useProfile} from '../../context/ProfileContext'
import {getListInCategory, loadFullList} from '../../lib/catalog'
import {categoryPath, findCategoryBySlug} from '../../lib/categories'
import {reviewAnswers} from '../../lib/answerMatching'
import {hasIntroduced} from '../../lib/profileStorage'
import {getListRecord} from '../../lib/profileProgress'
import IntroduceModal from '../IntroduceModal/IntroduceModal'

import './ListGame.css'

const AnswerLabelsPanel = ({title, children}) => (
  <div className='list-game__label-panel'>
    <h3 className='ui small header'>{title}</h3>
    <div className='ui labels'>{children}</div>
  </div>
)

AnswerLabelsPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const ListGame = ({catalog, categories, isLoaded}) => {
  const {categorySlug, listSlug} = useParams()
  const {profile, completeIntroduction, recordGameResult} = useProfile()
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
  const needsIntroduction = profile && !hasIntroduced(profile)

  useEffect(() => {
    if (!isLoaded || !listStub || needsIntroduction) {
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
  }, [catalog, isLoaded, listStub, listSlug, needsIntroduction])

  useEffect(() => {
    if (phase === 'playing' && list) {
      inputRef.current?.focus()
    }
  }, [phase, list])

  if (!isLoaded || !profile) {
    return <div>Loading...</div>
  }

  if (!listStub) {
    return <div>Список не найден...</div>
  }

  if (needsIntroduction) {
    return (
      <IntroduceModal
        username={profile.username}
        onSave={completeIntroduction}
      />
    )
  }

  if (listError) {
    return <div>Не удалось загрузить список...</div>
  }

  if (!list) {
    return <div>Loading...</div>
  }

  const listTotal = list.answers?.length ?? 0
  const listRecord = getListRecord(profile, listSlug)

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

    recordGameResult(
      {
        categorySlug,
        categoryName: category?.name ?? categorySlug,
        listSlug,
        listName: list.name,
        score: result.score,
        total: result.total,
      },
      catalog
    )
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
      {listRecord !== null && (
        <p className='list-game__record'>
          Твой текущий рекорд: <strong>{listRecord}</strong> из {listTotal}
        </p>
      )}

      {phase === 'playing' ? (
        <>
          {answers.length > 0 && (
            <AnswerLabelsPanel title={`Твои ответы (${answers.length})`}>
              {answers.map((answer, index) => (
                <span
                  className='ui label list-game__label--pending'
                  key={`${answer}-${index}`}
                >
                  {answer}
                </span>
              ))}
            </AnswerLabelsPanel>
          )}

          <form className='list-game__input-row' onSubmit={handleSubmit}>
            <div className='ui fluid input'>
              <input
                ref={inputRef}
                type='text'
                value={draft}
                placeholder='Введи ответ'
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

          {review.reviewed.length > 0 ? (
            <AnswerLabelsPanel
              title={`Твои ответы (${review.reviewed.length})`}
            >
              {review.reviewed.map((item, index) => (
                <span
                  className={`ui label list-game__label--${item.status}`}
                  key={`${item.text}-${index}`}
                >
                  {item.text}
                </span>
              ))}
            </AnswerLabelsPanel>
          ) : (
            <p className='ui message'>Ты не ввёл ни одного ответа.</p>
          )}

          <div className='list-game__review-actions'>
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
                  <AnswerLabelsPanel
                    title={`Пропущенные ответы (${review.missed.length})`}
                  >
                    {review.missed.map((answer) => (
                      <span
                        className='ui label list-game__label--missed'
                        key={answer}
                      >
                        {answer}
                      </span>
                    ))}
                  </AnswerLabelsPanel>
                )}
              </div>
            )}

            <button
              className='ui huge primary fluid button'
              type='button'
              onClick={handlePlayAgain}
            >
              Играть снова
            </button>
          </div>
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
