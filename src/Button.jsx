import React from 'react'

  function Button({submit}) {
    
    return (
      <div>   
          <button
          onSubmit={submit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
      </div>
    )
  }

  export default Button
      