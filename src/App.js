import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    'Take dogs out for a walk',
    'Take the rubish out ',
    'hey i am here',
  ])
  const [input, setInput] = useState('')

  return (
    <div className='App'>
      <h1>hello world</h1>
      <input value={input}></input>
      <button>ADD todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
