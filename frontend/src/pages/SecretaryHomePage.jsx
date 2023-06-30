import { useEffect, useState } from "react";
import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";
import { useSession } from "../context/context-rodrigo/SessionProvider";
import { usePersonas } from "../context/context-rodrigo/PersonaProvider";

function SecretaryHomePage(){
  const {user}=useSession();
  const [currentUser,setCurrentUser]=useState();
  const [password,setPassword]=useState('');
  const {updatePersona}=usePersonas();
  const [newPassword,setNewPassword]=useState("");
  
  useEffect(()=>{
    if(user){
      setCurrentUser(user);
      setPassword("");
    }
  })
  const onPressedUpdatePassword = (event) => {
    event.preventDefault();

    if(newPassword.length>=5){
      
      updatePersona(currentUser.id, {
        ...currentUser,
        password,
      });
      console.log(newPassword)
      alert("password actualizado con exito");
    }else{
      alert("tu nuevo password debe tener 5 o mas caracteres")
    }
    
  }

  return <>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxSecretary/>
      <div
        className="espacioDeTrabajo"
      >
                  <div
            className="tituloInicio"
          >
            <h1>Información Personal</h1>
          </div>
          <p
            className="informativo"
          >Esta sección presenta la información personal del usuario actual.</p>
          <div
            className="cardUserInicio"
          >
          <div
            className="cardInfoPersonal"
          >
            <p>nombre: {user?.nombre}</p>
            <p>apellido paterno: {user?.apellido_paterno}</p>
            <p>apellido materno: {user?.apellido_materno}</p>
            <p>ci: {user?.ci}</p>
            <p>telefono: {user?.telefono}</p>
            <p>password:</p>
            <form action="">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="nuevo password"
                required
              />
              <button
                className="botonActualizaPassword"
                onClick={() => onPressedUpdatePassword(event)}
              >Actualizar</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </>
}
export default SecretaryHomePage;