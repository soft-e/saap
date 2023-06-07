import { useActionData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useSession } from "../../context/context-rodrigo/SessionProvider";
import { Formik } from "formik";
import { usePersonas } from "../../context/context-rodrigo/PersonaProvider";
import "../../assets/css/css-rodrigo/InicioPage.css"

function InicioPage() {
  const { user } = useSession();
  const [currentUser, setCurrentUser] = useState();
  const [password, setPassword] = useState();
  
  const {updatePersona}=usePersonas();

  useEffect(()=>{
    if(user){ 
      setCurrentUser(user);
      setPassword(user.password);
    }
    
  },[user])
  const onPressedUpdatePassword = (event, password) => {
    event.preventDefault();
    updatePersona(currentUser.id, {
      ...currentUser,
      password,
    });
    console.log(password)
  }
  return <>
      <Navbar accion="cerrar sesion" />
      <div
        className="espacioPagina"
      >
        <ButtonBoxAdmin />
        <div
          className="espacioDeTrabajo"
        >
          <div
            className="tituloInicio"
          >
            <h1>informacion personal</h1>
          </div>
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
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => onPressedUpdatePassword(event, password)}
              >Actualizar</button>
            </form>
          </div>

        </div>
        </div>
      </div>
    </>
  
}
export default InicioPage;