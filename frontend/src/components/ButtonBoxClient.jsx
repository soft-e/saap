import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/buttonBoxAdmin.css";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFaceTired } from "@fortawesome/free-solid-svg-icons";
import CardUser from "./CardUser";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

function ButtonBoxClient(props){
  const navigate = useNavigate();
  const id = props.docente_id
  
  return <div
    className="cajaBotones"
  >
    <CardUser/>
    <div
      className="botones"
    >
      { console.log("imprmir desde la caja de botones el id: "+id) }
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/client/"+id)}
      >
        <FontAwesomeIcon icon={faHouse}/>
        Inicio
        <div
          className="hvr-icon"
        >
          <FontAwesomeIcon icon={faChevronRight}/>
        </div>
      </button>
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/client/messages")}
      >
        <FontAwesomeIcon icon = {faEnvelope}/>
        Mensajes
        <div
          className="hvr-icon"
        >
          <FontAwesomeIcon icon={faChevronRight}/>
        </div>
      </button>
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/client/complaints")}
      >
        <FontAwesomeIcon icon = {faFaceTired}/>
        Quejas
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/client/contract")}
      >
        <FontAwesomeIcon icon={faFileContract}/>
        Contrato
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
    </div>
  </div>
}
export default ButtonBoxClient;