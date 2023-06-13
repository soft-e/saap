import "../assets/css/buttonBoxAdmin.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardUser from "./CardUser";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


function ButtonBoxSecretary() {
  
  const navigate = useNavigate();

  return <div
    className="cajaBotones"
  >
    <CardUser />
    <div
      className="botones"
    >
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/secretary/home")}
        
      >
        <FontAwesomeIcon icon={faHouse} />
        Inicio
        <div
          className="hvr-icon"
        >
          <FontAwesomeIcon icon={faChevronRight}/>
        </div>

      </button>
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={()=>navigate("/secretary/regpayment")}
      >
        <FontAwesomeIcon icon={faDollarSign} />
        Registrar Pago
        <div
          className="hvr-icon"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </button>
      <button
        className="hvr-fade hvr-icon-forward"
        onClick={() => navigate("/secretary/contract")}
      >
        <FontAwesomeIcon icon={faFileContract} />
        Contratos
        <div
          className="hvr-icon"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </button>
    </div>
  </div>
}

export default ButtonBoxSecretary;