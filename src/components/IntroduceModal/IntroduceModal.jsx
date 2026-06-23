import {useState} from 'react'
import PropTypes from 'prop-types'

import './IntroduceModal.css'

const IntroduceModal = ({username, onSave}) => {
  const [draft, setDraft] = useState(username)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave(draft)
  }

  return (
    <div
      className='introduce-modal__backdrop'
      role='dialog'
      aria-modal='true'
      aria-labelledby='introduce-modal-title'
    >
      <div className='introduce-modal__dialog'>
        <div className='header' id='introduce-modal-title'>
          Представьтесь
        </div>
        <p className='description'>
          Перед первой игрой введите имя для профиля. Его можно сменить позже на
          странице профиля.
        </p>
        <form className='introduce-modal__form' onSubmit={handleSubmit}>
          <div className='ui fluid input'>
            <input
              type='text'
              value={draft}
              maxLength={32}
              autoFocus
              onChange={(event) => setDraft(event.target.value)}
            />
          </div>
        </form>
        <div className='introduce-modal__actions'>
          <button
            className='ui primary button'
            type='button'
            onClick={handleSubmit}
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  )
}

IntroduceModal.propTypes = {
  username: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default IntroduceModal
