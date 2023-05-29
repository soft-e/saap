import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import CardListItemSitio from "../../components/components-rodrigo/CardListItemSitio";
import "../../assets/css/css-rodrigo/ContratoSitioCliente.css"

function ContratoSitioCliente(){
  const navigate = useNavigate();
  return <>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacioDeTrabajo"
      >
        <div
          className="tituloSitio"
        >
          <h1>Asignar un sitio del paqueo</h1>
        </div>
        <div
          className="listaSitios"
        >
          <div>
          <CardListItemSitio/>
          </div>
        </div>
        <div
          className="espacioBotones"
        >
          <button
            onClick={()=>navigate("/contrato")}
          >finalizar</button>
          <button
            onClick={()=>navigate("/contrato")}
          >cancelar</button>
        </div>
      </div>
    </div>
  </>
}
export default ContratoSitioCliente;