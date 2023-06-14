import { useEffect } from "react";
import "../assets/css/principalPage.css"
import Navbar from "../components/Navbar";
import { useMensajes } from "../context/context-rodrigo/MensajeProvider";

function PrincipalPage(){
  const {mensajes,loadMensajes}=useMensajes();
  useEffect(()=>{
    loadMensajes();
  })
  
  console.log(mensajes);
  const loadGlobalmessages=()=>{
    const globalMessages = mensajes.filter((mensaje)=>{
      return mensaje.destinatario ==="todos"
    })
    return globalMessages;
    console.log(globalMessages)
  }
  
  return <>
    <Navbar accion="iniciar sesion" />
  <div
    className="dashboard"
  >
    <div
      className="cardFotoParqueo"
    >
      aqui vendra foto del parqueo
    </div>
    <div
      className="cardMensajesGlobales"
    >
      aqui vendran los mensajes globales
      {loadGlobalmessages().map((mensaje,index)=>{
        return(
          <></>
        )
      })}
    </div>
</div></>
}
export default PrincipalPage;