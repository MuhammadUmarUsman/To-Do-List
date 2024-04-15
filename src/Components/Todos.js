import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
const Todos = (props) => {
    const style = {
        textDecoration: props.isCompleted ? 'line-through' : "none",
        opacity: props.isCompleted ? '0.6' : ""
    }
    return (
        <div className='todo'>
            <p onClick={() => { props.toggleComplete(props.id) }} style={style}>{props.value}</p>
            <div className='todo-button-holder'>
                <FontAwesomeIcon className='todo-buttons' icon={faPenToSquare} />
                <FontAwesomeIcon className='todo-buttons' icon={faTrash} onClick={() => { props.deleteTodo(props.id) }} />
            </div>
        </div>
    )
}

export default Todos