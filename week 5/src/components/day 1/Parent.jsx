import React, { useState } from 'react'
import InputBox from './InputBox'
import DisplayText from './DisplayText'

const Parent = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6">
      <InputBox onTextChange={setText} />
      <DisplayText value={text} />
    </div>
  )
}

export default Parent