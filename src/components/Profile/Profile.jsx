import {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import Icon from '../ui/Icon'
import {useProfile} from '../../context/ProfileContext'
import './Profile.css'

const Profile = ({categories}) => {
  const {profile, setUsername} = useProfile()
  const [isEditing, setIsEditing] = useState(false)
  const [draftUsername, setDraftUsername] = useState('')

  const categoryScores = useMemo(() => {
    const namesBySlug = Object.fromEntries(
      (categories ?? []).map((category) => [category.slug, category.name])
    )

    return Object.entries(profile?.scoresByCategory ?? {})
      .map(([slug, score]) => ({
        slug,
        name: namesBySlug[slug] ?? slug,
        score,
      }))
      .sort((a, b) => b.score - a.score)
  }, [categories, profile?.scoresByCategory])

  const gameHistory = useMemo(
    () => [...(profile?.gameHistory ?? [])].reverse(),
    [profile?.gameHistory]
  )

  if (!profile) {
    return <div>Загрузка профиля...</div>
  }

  const startEditing = () => {
    setDraftUsername(profile.username)
    setIsEditing(true)
  }

  const cancelEditing = () => {
    setIsEditing(false)
    setDraftUsername('')
  }

  const saveUsername = () => {
    const trimmed = draftUsername.trim()

    if (trimmed) {
      setUsername(trimmed)
    }

    setIsEditing(false)
    setDraftUsername('')
  }

  return (
    <div className='profile-page'>
      <div className='profile-page__header'>
        {isEditing ? (
          <div className='profile-page__edit'>
            <input
              className='profile-page__input'
              value={draftUsername}
              onChange={(event) => setDraftUsername(event.target.value)}
              maxLength={32}
              autoFocus
            />
            <button
              type='button'
              className='ui mini positive button'
              onClick={saveUsername}
            >
              Сохранить
            </button>
            <button
              type='button'
              className='ui mini button'
              onClick={cancelEditing}
            >
              Отмена
            </button>
          </div>
        ) : (
          <div className='profile-page__title-row'>
            <h1 className='ui header profile-page__title'>
              {profile.username}
            </h1>
            <button
              type='button'
              className='profile-page__edit-button'
              onClick={startEditing}
              title='Изменить имя'
              aria-label='Изменить имя'
            >
              <Icon name='edit' />
            </button>
          </div>
        )}
      </div>

      <div className='ui segment profile-page__section'>
        <h2 className='ui sub header'>Очки</h2>
        <p className='profile-page__total-score'>
          Всего: <strong>{profile.totalScore ?? 0}</strong>
        </p>

        {categoryScores.length === 0 ? (
          <p className='profile-page__empty'>
            Пока нет очков по категориям. Пройди первый список — результат
            появится здесь.
          </p>
        ) : (
          <table className='ui very basic table profile-page__table'>
            <thead>
              <tr>
                <th>Категория</th>
                <th>Очки</th>
              </tr>
            </thead>
            <tbody>
              {categoryScores.map((entry) => (
                <tr key={entry.slug}>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className='ui segment profile-page__section'>
        <h2 className='ui sub header'>История игр</h2>

        {gameHistory.length ? (
          <table className='ui very basic table profile-page__table'>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Категория</th>
                <th>Список</th>
                <th>Результат</th>
              </tr>
            </thead>
            <tbody>
              {gameHistory.map((entry, index) => (
                <tr key={`${entry.playedAt}-${entry.listSlug}-${index}`}>
                  <td>{entry.playedAt}</td>
                  <td>{entry.categoryName ?? entry.categorySlug}</td>
                  <td>{entry.listName}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='profile-page__empty'>
            История пуста. Здесь будут твои попытки: дата, категория, список и
            набранные очки.
          </p>
        )}
      </div>
    </div>
  )
}

Profile.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default Profile
