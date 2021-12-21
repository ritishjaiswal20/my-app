import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText } from '@mui/material'

function Todo(props) {
  return (
    <List className='todolist'>
      <ListItem>
        <ListItemText primary={props.text} secondary='dummy deadline' />
      </ListItem>
    </List>
  )
}

export default Todo
