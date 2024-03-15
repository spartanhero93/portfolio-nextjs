import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import styles from '../styles/app.scss'

console.log(styles)

export default function Home () {
  const [count, handleCount] = useState(0)
  return (
    <div className='light_mode'>
      <Sidebar />
      <p>This is my next.js app! {count}</p>
      <button onClick={() => handleCount(count + 1)}>Click to add!</button>
    </div>
  )
}

 