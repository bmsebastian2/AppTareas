import React,{useState,useEffect} from 'react'
import TodoForm from './components2/TodoForm'
import TodoList from './components2/TodoList'
const initialTodos = [
    {
    id : 1,
    title : 'Todo #1',
    description : 'Desc de Todo #1',
    completed : false

},
{
    id : 2,
    title : 'Todo #2',
    description : 'Desc de Todo #2',
    completed : true

}]
const localTodos = JSON.parse(localStorage.getItem('todos'));
const App2 = () => {

    const [todos, setsTodos] = useState(localTodos || initialTodos);
    const [todoEdit, setTodoEdit] = useState(null);

    useEffect (()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const todoDelete = (id) => {
        if(id){}else{
            if(id === todoEdit.id){
            setTodoEdit(null);
        }
        }
        
        const changeTodos = todos.filter(todo => todo.id !== id);
        setsTodos(changeTodos);       
    }
    const todoToogleCompleted = (todoid) => {
       const changeTodos = todos.map( (todo) => (todo.id === todoid)?{...todo,completed:!todo.completed}:todo);
        setsTodos(changeTodos);
    }
    const todoAdd = (todo) => {
        const newTodo ={
            id : Date.now(),
            ...todo,
            completed : true
        }
        const changeTodos = [
            newTodo, ...todos
        ]
        setsTodos(changeTodos);
    }

    const todoEditChange = (todoChange) =>{

        const change = todos.map( (a) =>  a.id === todoChange.id?todoChange:a );
        setsTodos(change);
    }

    
   

    return (
        <div className="container mt-4">
            
            <div className="row">

                <div className="col-md-8">
                   
                   <TodoList 
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToogleCompleted= {todoToogleCompleted}
                        setTodoEdit = {setTodoEdit}
                    />

                </div>
                
                <div className="col-md-4">
                    
                    <TodoForm
                        todoEdit = {todoEdit}
                        todoAdd = {todoAdd}
                        todoEditChange = {todoEditChange}
                        setTodoEdit = {setTodoEdit}
                    />

                </div>


            </div>
        
            
            

        </div>
    )
}

export default App2
