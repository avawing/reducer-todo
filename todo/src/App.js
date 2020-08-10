import React, { useReducer, useState } from 'react';
import {reducer} from './reducers/reducer'
import {initialState} from './reducers/reducer'
import './App.css';
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState.TaskList)
  const [task, setTask] = useState('')

  



  return (
    <div className="App">
      <h1>Reducer Todos:</h1>
      <ToDoList list = {initialState.taskList}/>
      <ToDoForm dispatch = {dispatch} task = {task} setTask = {setTask}/>
    </div>
  );
}

export default App;
