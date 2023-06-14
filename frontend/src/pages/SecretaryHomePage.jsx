import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";

function SecretaryHomePage(){
  return <>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxSecretary/>
      <div
        className="espacioDeTrabajo"
      >
        <p>pagina de inicio</p>
      </div>
    </div>
  </>
}
export default SecretaryHomePage;