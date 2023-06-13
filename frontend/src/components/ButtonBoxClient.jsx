import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/buttonBoxAdmin.css";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFaceTired } from "@fortawesome/free-solid-svg-icons";
import CardUser from "./CardUser";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

function ButtonBoxClient(){
  const navigate = useNavigate();
  return <div
    className="cajaBotones"
  >
    <CardUser/>
    <div
      className="botones"
    >
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/client/home")}
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