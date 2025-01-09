import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './Title'
import RandomSeedPicker from './RandomSeedPicker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <RandomSeedPicker />
    </>
  )
}

export default App
