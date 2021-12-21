import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import './App.css'
import Button from '@mui/material/Button'
import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Input } from '@mui/material'
import db from './firebase'
import firebase from 'firebase'
function App() {
  const [todos, setTodos] = useState(['abc', 'def'])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo))
      })
  }, [])

  const addtodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className='App'>
      <h1>hello world</h1>
      <form>
        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>
        <Button
          disabled={!input}
          variant='contained'
          type='submit'
          onClick={addtodo}
        >
          ADD TODO
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
