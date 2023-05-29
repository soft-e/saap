import { useNavigate } from "react-router-dom";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import CardListItemCliente from "../../components/components-rodrigo/CardListItemCliente";

function ContratoCliente(){
  const navigate = useNavigate();
  return<>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacioDeTrabajo"
      >
        <div
          className="tituloCliente"
        >
          <h1>Elegir Cliente</h1>
        </div>
        <div
          className="espacioCards"
        >
          <CardListItemCliente/>
        </div>
      </div>
    </div>
  </>
}
export default ContratoCliente;