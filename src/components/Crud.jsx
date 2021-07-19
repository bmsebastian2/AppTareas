import React from 'react'
import EditUser from './EditUser'
import Formulario from './Formulario'
import UserTables from './UserTables'

const Crud = ({users,addUser,delUser,changeForm,current,editRow}) => {
    console.log(changeForm);
    return (
        <div>
            <hr />
            <h3 className="display-3 text-center">Crud</h3>
            <hr />
            <div className="container border">

                <div className="row">
                    <div className="col-md-6">
                        <h5 className="display-5">Formulario:</h5>
                        {(changeForm===false)?<Formulario addUser={addUser} />:<EditUser current={current}/>}
                        
                    </div>
                    <div className="col-md-6">
                    <h5 className="display-5">Tablas:</h5>

                        <UserTables 
                            users={users} 
                            delUser={delUser}
                            editRow={editRow}
                            
                            />                      

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Crud
