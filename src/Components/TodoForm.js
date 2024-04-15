import React from 'react'

const TodoForm = (props) => {
    const [value, setValue] = React.useState("")
    function handleChange(e) {
        setValue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.addTodo(value)
        setValue("")
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-form-input' type="text" placeholder='Add a Todo' value={value} onChange={handleChange} />
            <button className='todo-form-button'>ADD TASK</button>
        </form>
    )
}

export default TodoForm