import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";

function ClientHomePage(){
  return <>
  <Navbar accion="cerrar sesion"/>
  <div
    className="espacioPagina"
  >
    <ButtonBoxClient/>
    <div
      className="espacioDeTrabajo"
    >
      pagina de inicio del cliente
    </div>
  </div>
  </>
};
export default ClientHomePage;