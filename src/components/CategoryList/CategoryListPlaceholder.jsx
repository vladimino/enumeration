import React from 'react'

const CategoryListPlaceholder = () => {
  const columns = [1, 2, 3].map((num) => (
    <div className='column' key={num}>
      <div className='ui raised segment'>
        <div className='ui placeholder'>
          <div className='image header'>
            <div className='line' />
          </div>
          <div className='paragraph'>
            <div className='line' />
            <div className='line' />
          </div>
        </div>
      </div>
    </div>
  ))

  return <div className='ui three column stackable grid'>{columns}</div>
}

export default CategoryListPlaceholder
