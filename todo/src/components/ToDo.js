import React from 'react'

function ToDo(props){
    const {item, clickHandler} = props;

       
    return(
        <li onClick={() => clickHandler(item.id)} style = {{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.item}</li>

    )
}

export default ToDo