import React, { useState } from 'react'
import '../styles/app.module.scss'

function Header ({title}) {
  return <h1 className='container'>{title}</h1>
}

export default function Home () {
  const [count, handleCount] = useState(0)
  return (
    <div>
      <Header title="Howdy!"/>
      <p>This is my next.js app! {count}</p>
      <button onClick={() => handleCount(count + 1)}>Click to add!</button>
    </div>
  )
}

 