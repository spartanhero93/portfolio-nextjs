import React, { useState } from 'react'

function Header ({title}) {
  return <h1>{title}</h1>
}

function App () {
  const [count, handleCount] = useState(0)
  return (
    <div>
      <Header title="Howdy!"/>
      <p>This is my next.js app! {count}</p>
      <button onClick={() => handleCount(count + 1)}>Click to add!</button>
    </div>
  )
}

export default App