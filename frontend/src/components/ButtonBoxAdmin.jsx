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
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/inicio")}
    >
      <FontAwesomeIcon icon={faHouse}/>
      Inicio
      <div
        className="hvr-icon"
      >
        <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
      
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/contratos")}
    >
      <FontAwesomeIcon icon={faFileContract} />
      Contratos
      <div
        className="hvr-icon"
      >
        <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/atencion")}
    >
      <FontAwesomeIcon icon={faCalendarDays} />
      Atencion
      <div
        className="hvr-icon"
      >
        <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/tarifa")}
      >
      <FontAwesomeIcon icon={faDollarSign} />
      Tarifa
      <div
        className="hvr-icon"
      >
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/reportes")}
    >
      <FontAwesomeIcon icon={faChartPie} />
      Reportes
      <div
        className="hvr-icon"
      >
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={() =>navigate('/vermensajes')}
    >
      <FontAwesomeIcon icon={faEnvelope} />
      Mensajes
      <div
        className="hvr-icon"
      >
        <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={() =>navigate('/verquejas')}
    >
      <FontAwesomeIcon icon={faFaceTired} />
      Quejas
      <div
        className="hvr-icon"
      >
        <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/parqueos")}
    >
      <FontAwesomeIcon icon={faCar} />
      Parqueo
      <div
        className="hvr-icon"
      >
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    
    <button
      className="hvr-fade hvr-icon-forward"
      onClick={()=>navigate("/personal")}
    >
      <FontAwesomeIcon icon={faUsers} /> 
      Personal
      <div
        className="hvr-icon"
      >
      <FontAwesomeIcon icon={faChevronUp} className="fa-rotate-90"/>
      </div>
    </button>
    
  </div>
</div>
}

export default ButtonBoxAdmin;