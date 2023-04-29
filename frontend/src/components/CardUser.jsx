import "../assets/css/cardUser.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function CardUser(){
  return <div
    className="cardUser"
  >
    <FontAwesomeIcon icon={faCircleUser} className="icono"/>
    <label className="nombreUsuario">
      Administrador
    </label>
  </div>
}


export default CardUser;