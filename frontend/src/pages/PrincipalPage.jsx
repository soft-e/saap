import { useEffect } from "react";
import "../assets/css/principalPage.css"
import Navbar from "../components/Navbar";
import { useMensajes } from "../context/context-rodrigo/MensajeProvider";


function PrincipalPage(){
  const {mensajes,loadMensajes}=useMensajes();
  useEffect(()=>{
    loadMensajes();
  })
  
  //console.log(mensajes);
  const loadGlobalmessages=()=>{
    const globalMessages = mensajes.filter((mensaje)=>{
      return mensaje.destinatario ==="todos"
    })
    return globalMessages;
    //console.log(globalMessages)
  }
  const showMessage=(contenido)=>{
    console.log(contenido)
    return(<div>
      <p>
        {contenido}
      </p>
    </div>)
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
      <div className="tituloComunicados">
      <h2>Comunicados</h2>
      </div>
      <div className="mensajesGlobales">
      {loadGlobalmessages().map((mensaje,index)=>{
        return(
          <p
            onClick={()=>{showMessage(mensaje.contenido)}}
            className="mensajeGlobal"
            key={index}
            
          >asunto: {mensaje.asunto}</p>
        )
      })}  
      </div>
    </div>
</div></>
}
export default PrincipalPage;