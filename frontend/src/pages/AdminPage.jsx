import { useContext } from "react";
import "../assets/css/adminPage.css";
import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import Navbar from "../components/Navbar";
import { SessionContext } from "../context/context-rodrigo/SessionContext";

function AdminPage(){
  const {user} = useContext(SessionContext);
  return <>
  <Navbar accion="cerrar sesion"/>
  <div className="espacioPagina">
    <ButtonBoxAdmin />
    <div className="espacioDeTrabajo">
      <div
      className="espacioDeMensaje"
      >
 <p>
        Bienvenido, la caja de botones a la izquierda de tu pantalla, son todas las funcionalidades a las que tienes acceso.
      </p>
      </div>
     
    </div>
  </div>
  </> 
}
export default AdminPage;