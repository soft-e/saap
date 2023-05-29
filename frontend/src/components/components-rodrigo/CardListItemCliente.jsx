import { useNavigate } from "react-router-dom";
import "../../assets/css/css-rodrigo/CardListItemCliente.css"
function CardListItemCliente(cliente){
  const navigate = useNavigate();
  return <div
    className="espacioCardCliente"
  >
    <div
      className="nombreCliente"
    >
      <p>nombre: {cliente?.nombre}</p>
      <p>apellido_p: {cliente?.apellido_paterno}</p>
      <p>apellido_m: {cliente?.apellido_materno}</p>
    </div>
    <div
      className="botonRegistrarCliente"
    ></div>
    <button
      onClick={()=>navigate("/contrato/new/vehiculo")}
    >
      registrar
    </button>
  </div>
}
export default CardListItemCliente;