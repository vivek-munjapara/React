import React, { useState } from 'react'

export default function Ex_01_usestart() {

  const [data, setData] = useState(0)

  const incre = () => {
    setData(data + 1)
  }

  const decre = () => {
    setData(data - 1)
  }

  const multiply = () => {
    setData(data * 5)
  }

  return (
    <div>

      <p>Input Value:{data}</p>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={multiply}>Multiply</button>

    </div>
  )
}

