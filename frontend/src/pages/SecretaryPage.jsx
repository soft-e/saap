import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";


function SecretaryPage(){
  return(
    <>
      <Navbar accion = "cerrar sesion"/>
      <div
        className="espacioPagina"
      >
        <ButtonBoxSecretary/>
        <div className="espacioDeTrabajo">
          
        </div>
      </div>
    </>
  )
}
export default SecretaryPage;