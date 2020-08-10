import React from 'react'

function ToDoList(props){
    const {list} = props
    return (
        <ul>
            {list.map(item => {
                <ToDo task = {item.task} key = {item.id}/>
            })}
        </ul>
    )
}

export default ToDoList