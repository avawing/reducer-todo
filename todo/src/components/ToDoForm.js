import React from 'react'

function ToDoForm(props){
    const {dispatch, task, setTask} = props

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO', payload: task})
        setTask('')
    }

    const changeHandler = (e) => {
        setTask(e.target.value)
    }
    return(
        <form onSubmit = {submitHandler}>
            <input 
            type = 'text' 
            value = {task}
            onChange = {changeHandler}/>
        </form>

    )
}

export default ToDoForm