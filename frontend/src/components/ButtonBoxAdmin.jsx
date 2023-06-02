import "../assets/css/buttonBoxAdmin.css";
import CardUser from "../components/CardUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFaceTired } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function ButtonBoxAdmin(){
  const navigate = useNavigate();

  return <div
  className="cajaBotones"
>
  <CardUser/>
  <div
    className="botones"
  >
    <button
      className="hvr-shrink"
    >
      <FontAwesomeIcon icon={faHouse} />
      Inicio
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
    >
      <FontAwesomeIcon icon={faFileContract} />
      Contratos
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
      onClick={()=>navigate("/atencion")}
    >
      <FontAwesomeIcon icon={faCalendarDays} />
      Atencion
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
      onClick={()=>navigate("/tarifa")}
      >
      <FontAwesomeIcon icon={faDollarSign} />
      Tarifa
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
    >
      <FontAwesomeIcon icon={faChartPie} />
      Reportes
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
    >
      <FontAwesomeIcon icon={faEnvelope} />
      Mensajes
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
    >
      <FontAwesomeIcon icon={faFaceTired} />
      Quejas
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    <button
      className="hvr-shrink"
      onClick={()=>navigate("/parqueos")}
    >
      <FontAwesomeIcon icon={faCar} />
      Parqueo
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    
    <button
      className="hvr-shrink"
      onClick={()=>navigate("/personal")}
    >
      <FontAwesomeIcon icon={faUsers} /> 
      Personal
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-270"/>
    </button>
    
  </div>
</div>
}

export default ButtonBoxAdmin;