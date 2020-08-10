import React, { useReducer, useState } from 'react';
import {reducer} from './reducers/reducer'
import {initialState} from './reducers/reducer'
import './App.css';
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [task, setTask] = useState('')

  console.log(todos)

  return (
    <div className="App">
      <h1>Reducer Todos:</h1>
      <ToDoList list = {todos}/>
      <ToDoForm dispatch = {dispatch} task = {task} setTask = {setTask}/>

  <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
