import React from 'react'

const InputBox = ({ onTextChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => onTextChange(e.target.value)}
      placeholder="Type something..."
      className="border rounded-md px-3 py-2 w-full mb-4"
    />
  )
}

export default InputBox