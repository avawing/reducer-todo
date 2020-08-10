import React from 'react'

function ToDo(props){
    const {item, clickHandler} = props;

       
    return(
        <li onClick={() => clickHandler(item.id)} style = {{textDecoration: item.complete ? 'line-through' : ''}}>{item.item}</li>

    )
}

export default ToDo