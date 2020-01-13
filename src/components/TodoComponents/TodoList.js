import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todo.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoList;