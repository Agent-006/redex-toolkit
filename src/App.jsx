import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-semibold text-zinc-300'>Learn about reduxtoolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
