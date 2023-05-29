import { useNavigate } from "react-router-dom";
import "../../assets/css/css-rodrigo/CardListItemCliente.css";
import { useDocentes } from "../../context/context-rodrigo/DocenteProvider";
import { usePersonas } from "../../context/context-rodrigo/PersonaProvider";
import { useState } from "react";

function CardListItemCliente({docente}){
  const navigate = useNavigate();
  const {getPersona}=usePersonas();
  const [persona,setPersona]=useState({
    
  });
  return <div
    className="espacioCardCliente"
  >
    <div
      className="nombreCliente"
    >
      <p>nombre: {docente?.nombre}</p>
      <p>apellido_p: {docente?.apellido_paterno}</p>
      <p>apellido_m: {docente?.apellido_materno}</p>
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