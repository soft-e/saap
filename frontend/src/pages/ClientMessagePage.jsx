import ButtonBoxClient from "../components/ButtonBoxClient";
import Navbar from "../components/Navbar";

function ClientMessagePage(){
  return <>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxClient/>
      <div
        className="espacioDeTrabajo"
      >
        pagina de mensajes
      </div>
    </div>
  </>
}
export default ClientMessagePage;