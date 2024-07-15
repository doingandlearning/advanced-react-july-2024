import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskManager from './components/TaskManager'
import Navbar from './components/Navbar'
import { TaskProvider } from './context/TaskContext'
function App() {
  return (
    <>
      <TaskProvider>
        <Navbar />
        <TaskManager />
      </TaskProvider>
    </>
  )
}

export default App
