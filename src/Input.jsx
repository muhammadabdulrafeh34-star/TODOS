// hum aik input bnaen ge jis ko hum sacreen pr dekhen ge 
import React from 'react'

export default function Input({value, onChange}) {
  return (
    <div>
      <input type="text"
      value={value}
      onChange={onChange}
      className="text-white my-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}
