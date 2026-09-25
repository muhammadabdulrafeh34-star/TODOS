    import React from 'react'

function Container({children}) {
  return (
   <div className="flex flex-col my-10 w-100 h-auto mx-auto bg-gray-500 text-white rounded-lg ">
    {children}
    </div>
  )
}

export default Container
