import { useActionData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useSession } from "../../context/context-rodrigo/SessionProvider";
import { Formik } from "formik";
import { usePersonas } from "../../context/context-rodrigo/PersonaProvider";

function InicioPage() {
  const { user } = useSession();
  const [currentUser, setCurrentUser] = useState();
  const [password, setPassword] = useState();
  const {updatePersonas}=usePersonas();
  

  const onPressedUpdatePassword = (event, password) => {
    event.preventDefault();
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
            className="titulo"
          >
            <h1>informacion personal</h1>
          </div>
          <div
            className="CardInfoPersonal"
          >
            <label>nombre: {user?.nombre}</label>
            <label>apellido paterno: {user?.apellido_paterno}</label>
            <label>apellido materno: {user?.apellido_materno}</label>
            <label>ci: {user?.ci}</label>
            <label>telefono: {user?.telefono}</label>
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
    </>
  
}
export default InicioPage;