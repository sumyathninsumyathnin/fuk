import React from 'react'

const MainContent = ({children}) => {
  return (
    <div className='bg-purple-200  w-5/6 h-screen   py-4 px-4 my-2 mx-3 rounded-md'>
      {children}
    </div>
  )
}

export default MainContent
