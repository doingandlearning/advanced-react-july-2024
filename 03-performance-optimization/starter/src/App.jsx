import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskManager from './components/TaskManager'
import { TaskContext, TaskProvider } from './context/TaskContext'
import Navbar from './components/Navbar'

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
