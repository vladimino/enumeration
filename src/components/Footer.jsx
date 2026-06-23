const Footer = () => (
  <div
    className='ui inverted vertical segment'
    style={{margin: '5em 0em 0em', padding: '3em 0em'}}
  >
    <div className='ui center aligned container'>
      <img
        className='ui centered mini image'
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt='Enumeration'
      />
      <div className='ui horizontal inverted divided link list'>
        <div className='item'>&copy; Володимир Білокур aka vladimino, 2026</div>
      </div>
    </div>
  </div>
)

export default Footer
