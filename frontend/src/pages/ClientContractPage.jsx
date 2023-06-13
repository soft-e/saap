import ButtonBoxClient from "../components/ButtonBoxClient";
import Navbar from "../components/Navbar";

function ClientContractPage(){
  return <>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxClient/>
      <div
        className="espacioDeTrabajo"
      >
        pagina contrato
      </div>
    </div>
  </>
};
export default ClientContractPage;