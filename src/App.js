import Crud from "./components/Crud";
import Props  from "./components/Props";
import { useState } from "react";
import Other from "./components/Other";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [sw, setsw] = useState(0)
  const sujeto = {
    nombre : 'Juanito',
    url : 'https://via.placeholder.com/75',
    texto :'This is some content from a media component. You can replace this with any content and adjust it as needed.'
  }
  const usersData = [
    { id : uuidv4(), name : 'Tania', username :'loco12'},
    { id : uuidv4(), name : 'Pepe', username :'ltania12'},
    { id : uuidv4(), name : 'Marcos', username :'Uy'}
  ]
   //state
  const [users, setUsers] = useState(usersData);
  
 //Agregar Usuario
  const addUser = (data) => {
    data.id =  uuidv4();
    setUsers([
      ...users,data
    ])
  }
  //Eliminar Usuario
  const delUser = (id) => {
      const array = users.filter(a =>a.id !== id);
      setUsers(array);
  }
  //Ediat usuario
  const editUser = () => {

  } 
  const [changeForm, setchangeForm] = useState(false)
  const initialFormstate ={id : null, name : '', username : ''}
  const [current, setcurrent] = useState(initialFormstate);
  const editRow = (user)=>{
    console.log(user.id);
    setchangeForm(true);
    setcurrent({id : user.id,  name : user.name,  username : user.username});
    console.log('current');
    console.log(current);
  }
  return (
    <div >

      <div className="container d-flex  justify-content-around mt-5">
        <button className="btn btn-primary" onClick={()=>setsw(0)}>Props</button>
        <button className="btn btn-primary" onClick={()=>setsw(1)}>Aplicacion CRUD</button>
        <button className="btn btn-primary" onClick={()=>setsw(2)}>Others</button>
      </div>

    {  (sw === 0)?
                   <Props sujeto = {sujeto}/>
      : (sw === 1)?
                   <Crud 
                      users = {users} 
                      addUser ={addUser} 
                      delUser={delUser} 
                      changeForm={changeForm}
                      current={current}
                      editRow = {editRow}
                      />
      : (sw === 2)?
                   <Other/>
      : null
    }
     
     
    </div>
  );
}

export default App;
