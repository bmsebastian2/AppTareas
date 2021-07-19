import React from 'react'

const UserTables = ({users,delUser,editRow}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>                  
                       {users.length > 0 ? 
                            ( users.map((a)=>(
                                <tr key = {a.id}>
                                  <td> {a.name} </td>
                                  <td> {a.userName }</td>
                                  <td>
                                  <button className="btn btn-dark" onClick={ () => editRow(a)}>Editar</button>
                                  <button className="btn btn-dark" onClick={()=>delUser(a.id)}>Eliminar</button>
                                 
                              
                                  </td>
                              </tr>
                          )
                          ))
                            :
                            (<tr> <td colSpan={3}>No existen usuarios</td></tr>)
                        }
                       
                        
                  


                    
                </tbody>
                </table>
        </div>
    )
}

export default UserTables
