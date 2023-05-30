import { useNavigate } from "react-router-dom";
import "../../assets/css/css-rodrigo/CardListItemCliente.css";
import { useDocentes } from "../../context/context-rodrigo/DocenteProvider";
import { usePersonas } from "../../context/context-rodrigo/PersonaProvider";
import { useEffect, useState } from "react";

function CardListItemCliente({persona}){
  
  const navigate = useNavigate();  
  return <div
    className="espacioCardCliente"
  >
    <div
      className="nombreCliente"
    >
      
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