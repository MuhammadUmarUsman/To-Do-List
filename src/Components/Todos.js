import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
const Todos = (props) => {
    const style = {
        textDecoration: props.isCompleted ? 'line-through' : "none"
    }
    return (
        <div className='todo'>
            <p style={style} onClick={() => { props.toggleComplete(props.id) }}>{props.value}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrash} onClick={() => { props.deleteTodo(props.id) }} />
            </div>
        </div>
    )
}

export default Todos