import React, {useState, useEffect} from 'react'

const TodoForm = ({todoAdd,todoEdit,todoEditChange,setTodoEdit}) => {
    const inictialFormValues = {
            title : '',
            description : ''
        };
    const [formValues, setFormValues] = useState(inictialFormValues);
    const {title, description} = formValues;
    
    const [error, setError] = useState(null);
    const [sucess, setSucess] = useState(null);
    
    useEffect(()=>{
        
        if(todoEdit){
            setFormValues(todoEdit)
        }else{
            setFormValues(inictialFormValues);
        }

    },[todoEdit]);

   
    

    const handleInpuChange = (e) => {
        const changeInputValues = {
            ...formValues,[e.target.name]:e.target.value
        }
        setFormValues(changeInputValues);

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        //Agregar nueva tarea
        if(title.trim() ===''){
            setError('Debe ingresar el titulo')
            return
        }
        if(description.trim() ===''){
            setError('Debe ingresar la description')
            return
        }

        if(todoEdit){
            todoEditChange(formValues);
            setSucess('Tarea editada');
            getFocus();
        }else{
            todoAdd(formValues);
            setFormValues(inictialFormValues);
            setSucess('Tarea agregada');
            e.target.reset();
            getFocus();
           
        }       
       
        setTimeout(()=>setSucess(null),1500);
        setError(null);
    }
    const textAgregarTodo = () => {
        setFormValues(inictialFormValues);
        setTodoEdit(null);
        document.getElementById('formulario').reset();

        
    }
    const getFocus = ()=>{
        document.getElementById('sisi').focus();
    }
    return (
        <div>
            <h2 className="display-5 text-center">{(todoEdit)?'Editar Tarea':'Nueva Tarea'}</h2>
            
            <form action="" onSubmit={handleSubmit} id="formulario">

                <input 
                    id="sisi"
                    name ="title"
                    type="text" 
                    placeholder="Titulo"
                    className="form-control"
                    defaultValue = {title}
                    onChange = {handleInpuChange}
                  

                    />
                <textarea 
                    className="form-control mt-2"
                    placeholder="Descripcion"
                    name="description" 
                    id="" 
                    cols="15" 
                    rows="5"
                    defaultValue = {description}
                    onChange = {handleInpuChange}
                    >
                    
                </textarea>

                <button 
                    className="btn btn-primary m-2 w-100"
                    type="submit"
                >
                {(todoEdit)?'Editar tarea':'Agregar Tarea'}
                
                </button>
                {(todoEdit) &&  
                
                    <p 
                        className=" text-center">Agregar <span type="button" 
                        onClick={()=> textAgregarTodo()} className="text-primary">
                            Nueva Tarea
                        </span>
                   </p>
                
                }
              
        

            </form>
            {error && (<div className="alert alert-danger mt-2"> {error}</div>)}
            {sucess && (<div className="alert alert-success mt-2">{sucess}</div>)}
           
            
            
            


        </div>
    )
}

export default TodoForm
