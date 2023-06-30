import "../assets/css/cardUser.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useContext, useEffect, useState } from "react";
import { useEmpleados } from "../context/context-rodrigo/EmpleadoProvider";
import { useSession } from "../context/context-rodrigo/SessionProvider";


function CardUser(){
  const {user}=useSession();
  
  const {empleados,loadEmpleados}=useEmpleados();
  //console.log(user);

  useEffect(()=>{
    loadEmpleados();
  },[]);
  //console.log(empleados);

  const getRolName=()=>{
    
    if(empleados.length>0){
      const findedEmployee = empleados.find((value)=>{
        return value.persona_id === user.id;
      })
      //console.log(findedEmployee);
      return !findedEmployee ? "docente":findedEmployee.nombre_cargo; 
    }
    
    //console.log(rol);
    
    
    //console.log(employeeFinded.nombre_car
    //const res = findedEmployee.nombre_cargo;

    //return("rol");
    //return res;
  }

  return <div
    className="cardUser"
  >
    <FontAwesomeIcon icon={faChevronRight} className="icono"/>
    <p className="nombreUsuario">
      {getRolName()}
    </p>
  </div>
}


export default CardUser;