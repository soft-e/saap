import "../assets/css/principalPage.css"
import Navbar from "../components/Navbar";

function PrincipalPage(){
  return <>
    <Navbar accion="iniciar sesion" />
  <div
    className="dashboard"
  >
    <div
      className="cardFotoParqueo"
    >
      aqui vendra foto del parqueo
    </div>
    <div
      className="cardMensajesGlobales"
    >
      aqui vendran los mensajes globales
    </div>
</div></>
}
export default PrincipalPage;