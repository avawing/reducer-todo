import React from 'react'
import ToDo from './ToDo'

function ToDoList(props){
    const {list, dispatch} = props
    const clickHandler = (id) => {
        dispatch({type: 'TOGGLE_TODO', payload: id})
}


    return (
        <ul>
            {list.map(item => {
                return <ToDo clickHandler = {clickHandler} key = {item.id} item = {item}/>
            })}
        </ul>
    )
}

export default ToDoList