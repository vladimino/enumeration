const Icon = ({name, size}) => (
  <i
    className={[size, name, 'icon'].filter(Boolean).join(' ')}
    aria-hidden='true'
  />
)

export default Icon
