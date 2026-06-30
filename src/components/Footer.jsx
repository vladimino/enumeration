import './Footer.css'

const Footer = () => (
  <footer className='ui inverted vertical segment footer'>
    <div className='ui container'>
      <div className='footer__container'>
        <div className='footer__left'>
          <p className='footer__tagline'>
            &copy; Enumeration: тренировка техники перебора
          </p>
          <p className='footer__contact'>
            По всем вопросам:{' '}
            <a href='mailto:game.enumeration@gmail.com'>
              game.enumeration@gmail.com
            </a>
          </p>
        </div>

        <p className='footer__author'>Author: Vlad Bilokur aka vladimino</p>
      </div>
    </div>
  </footer>
)

export default Footer
