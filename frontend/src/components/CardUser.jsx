import "../assets/css/cardUser.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { SessionContext } from "../context/context-rodrigo/SessionContext";
import { useContext, useEffect } from "react";
import { EmpleadoContext } from "../context/context-rodrigo/EmpleadoContext";

function CardUser(){
  const {user}=useContext(SessionContext);
  const {empleados,loadEmpleados}=useContext(EmpleadoContext);
  console.log(user);
  useEffect(()=>{
    loadEmpleados();
  },[]);
  console.log(empleados);
  const getRolName=()=>{
    const rol = empleados.find((empleado)=>{
      return empleado.persona_id === user.id;
    })
    return rol.nombre_cargo
  }
  return <div
    className="cardUser"
  >
    <FontAwesomeIcon icon={faCircleUser} className="icono"/>
    <p className="nombreUsuario">
      {getRolName()}
    </p>
  </div>
}


export default CardUser;