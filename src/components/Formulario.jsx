import React from 'react'
import { useForm } from "react-hook-form";

const Formulario = ({addUser}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) => {
        addUser(data);
        event.target.reset();
    }
  
    return (
        <div>
            
            <h5 className="display-6">Agregar:</h5>
            <form action="" onSubmit={handleSubmit (onSubmit)}>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    {...register('name',{required:true})}
                    ref={input => input && input.focus()}
                    
                />
                <div className="">
                    {errors.name && <span>Requerido</span>}
                </div>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Apellido"
                    name="userName"
                    {...register('userName',{required:true})}
                />
                 <div className="">
                    {errors.userName && <span>Requerido</span>}
                </div>
                <button className="btn btn-info" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario
