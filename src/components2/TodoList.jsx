import React from 'react'
import Todo from './Todo'




const TodoList = ({todos,todoDelete,todoToogleCompleted,setTodoEdit}) => {

   

    return (
        <div>
                <h2 className="text-end display-4">Soy TodoList</h2>
                {(todos.length<1) &&  <div className="alert alert-primary">No hay tareas en la lista. Por favor agrega una {':-)'}</div>}
                {
                    todos.map( (todo) => <
                        Todo todo = {todo} 
                        key = {todo.id}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}
                        />) 
                }
                
                
                
        </div>
    )
}

export default TodoList
