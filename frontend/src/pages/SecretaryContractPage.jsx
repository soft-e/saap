import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";

function SecretaryContractPage(){
  return<>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxSecretary/>
      <div
        className="espacioDeTrabajo"
      >
        pagina de contratos de secreatri@
      </div>
    </div>
  </>
}
export default SecretaryContractPage;