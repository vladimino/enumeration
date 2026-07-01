const Icon = ({name, size, className}) => (
  <i
    className={[size, name, 'icon', className].filter(Boolean).join(' ')}
    aria-hidden='true'
  />
)

export default Icon
