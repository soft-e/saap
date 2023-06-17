import ButtonBoxClient from "../components/ButtonBoxClient";
import Navbar from "../components/Navbar";

function ClientComplaintPage(){ //
  return(
    <>
      <Navbar accion="cerrar sesion"/>
      <div
        className="espacioPagina" //
      >
        <ButtonBoxClient/>
        <div
          className="espacioDeTrabajo"
        >
          pagina quejas
        </div>
      </div>
    </>
  )
};
export default ClientComplaintPage;