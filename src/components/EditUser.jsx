import React from 'react'
import { useForm } from "react-hook-form";



const EditUser = (current) => {
    // const defaultValues = {
    //     name : current.name,
        
    //   };
    console.log('formulario edir:');
    console.log(current);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ defaultValues:current });

    setValue('name',current.name);
    setValue('username',current.username);
    const onSubmit = (data,event) => {
        console.log(data)
        // event.target.reset();
    }
    return (
        <div>
            <div>
           
            <h5 className="display-6">Editar:</h5> 
            <form action="" onSubmit={handleSubmit (onSubmit)}>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    {...register('name',{required:true})}
                    // ref={input => input && input.focus()}
                 
                    
                />
                <div className="">
                    {errors.name && <span>Requerido</span>}
                </div>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Apellido"
                    name="username"
                    {...register('username',{required:true})}
                />
                 <div className="">
                    {errors.userName && <span>Requerido</span>}
                </div>
                <button className="btn btn-warning" >Editar</button>
            </form>
        </div>
    
        </div>
    )
}

export default EditUser
