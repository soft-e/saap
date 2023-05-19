import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useUsers } from "../context/UserProvider";

function AdminPageR(){
  const user1 = useContext(UserContext);
  const{users,loadUsers}=useUsers();
  useEffect(()=>{
    loadUsers();
  },[]);
  
  return <div>
    <h1>
      {user1.id}
    </h1>
    <h1>
      {user1.nombre}
    </h1>
    <h1>
      {user1.nombre}
    </h1>
  </div>
}

export default AdminPageR;