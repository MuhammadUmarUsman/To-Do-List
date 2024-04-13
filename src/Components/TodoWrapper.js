import React from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid';
uuidv4()

const TodoWrapper = () => {
    const [todos, setTodos] = React.useState([])
    function addTodo(todo) {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    }
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='todo-wrapper'>
            <TodoForm addTodo={addTodo} />
            {todos && todos.map(todo => <Todos key={todo.id} value={todo.task} deleteTodo={deleteTodo} id={todo.id} />)}
        </div>

    )
}

export default TodoWrapper