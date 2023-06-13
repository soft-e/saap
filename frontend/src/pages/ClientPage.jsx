import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";
function ClientPage() {
  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div
        className="espacioPagina"
      >
        <ButtonBoxClient/>
        <div
          className="espacioDeTrabajo"
        >
          pagina de cliente
        </div>
      </div>
    </>
  )
}
export default ClientPage;