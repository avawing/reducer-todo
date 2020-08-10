import React from 'react'
import ToDo from './ToDo'

function ToDoList(props){
    const {list} = props
    console.log(list)
    return (
        <ul>
            {list.map(item => {
                return <ToDo task = {item.item} key = {item.id}/>
            })}
        </ul>
    )
}

export default ToDoList