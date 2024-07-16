import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button clickedText={"You clicked it, well done!"} unclickedText={'Please click me!'} />
    </>
  )
}

export default App
