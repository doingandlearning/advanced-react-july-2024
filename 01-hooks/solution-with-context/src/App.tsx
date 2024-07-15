import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskManager from './components/TaskManager'
import Navbar from './components/Navbar'
import { TaskProvider } from './context/TaskContext'
import { ThemeProvider } from './context/ThemeContext'
function App() {
  return (
    <>
      <ThemeProvider>

        <TaskProvider>
          <Navbar />
          <TaskManager />
        </TaskProvider>
      </ThemeProvider>
    </>
  )
}

export default App
