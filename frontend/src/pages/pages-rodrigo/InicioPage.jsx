import { useActionData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useSession } from "../../context/context-rodrigo/SessionProvider";
import { Formik } from "formik";
import { usePersonas } from "../../context/context-rodrigo/PersonaProvider";
import "../../assets/css/css-rodrigo/inicioPage.css"

function InicioPage() {
  const { user } = useSession();
  const [currentUser, setCurrentUser] = useState();
  const [password, setPassword] = useState();
  const [newPassword,setNewPassword]=useState("");
  
  const {updatePersona}=usePersonas();

  useEffect(()=>{
    if(user){ 
      setCurrentUser(user);
      setPassword("");
    }
    
  },[])
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
  const cambiarPassword =(newPassword)=>{
    alert("password cambiado");

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
            <h1>Informaci&oacute;n Personal</h1>
          </div>
          <p>Se presenta la información personal del usuario actual</p>
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
            <p
              className="mensajeParrafo"
            >si deseas cambiar tu password <br />escribe uno nuevo en la caja <br /> de texto abajo </p>
            <form action="">
              <input
                type="text"
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
export default InicioPage;