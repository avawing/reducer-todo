import React, { useReducer, useState } from 'react';
import reducer from './reducers/reducer'
import initialState from './reducers/reducer'
import './App.css';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState.TaskList)
  const [task, setTask] = useState('')

  const ToDoList = initialState.taskList



  return (
    <div className="App">
      <h1>Reducer Todos:</h1>
      <ToDoList list = {ToDoList}/>
      <ToDoForm dispatch = {dispatch} />
    </div>
  );
}

export default App;
