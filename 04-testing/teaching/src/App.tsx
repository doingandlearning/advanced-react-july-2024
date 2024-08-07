import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import GreetingInput from './components/Greeting'
import LoginForm from './components/LoginForm'
import { ThemeProvider } from './context/ThemeContext.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Button clickedText={"You clicked it, well done!"} unclickedText={'Please click me!'} />
      <GreetingInput />
      <LoginForm onSubmit={(e) => console.log(e)} />
    </ThemeProvider>
  )
}

export default App
