import React from 'react'
import ToDo from './ToDo'

function ToDoList(props){
    const {list, dispatch} = props
    const clickHandler = (id) => {
        dispatch({type: 'TOGGLE_TODO', payload: id})
}

const clearList = (e) => {
    e.preventDefault()
    dispatch({type: 'CLEAR_TODO'})
  }


    return (
        <div>
        <ul>
            {list.map(item => {
                return <ToDo clickHandler = {clickHandler} key = {item.id} item = {item}/>
            })}
        </ul>
        <button onClick = {clearList}>Clear List</button>
        </div>
    )
}

export default ToDoList