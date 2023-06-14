import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";

function SecretaryRegisterPaymentPage(){
  return<>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxSecretary/>
      <div
        className="espacioDeTrabajo"
      >
        <p>pagina de registro de pago</p>
      </div>
    </div>
  </>
}

export default SecretaryRegisterPaymentPage;