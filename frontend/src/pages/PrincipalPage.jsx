import { useEffect, useState } from "react";
import "../assets/css/principalPage.css"
import Navbar from "../components/Navbar";
import { useMensajes } from "../context/context-rodrigo/MensajeProvider";

function PrincipalPage() {
  const { mensajes, loadMensajes } = useMensajes();
  const [globalMessages, setGlobalMessages] = useState([]);

  useEffect(() => {
    loadMensajes();
    
  }, [])

  //console.log(mensajes);
  const loadGlobalmessages = () => {
    const filteredMessages = mensajes.filter((mensaje)=>{
    return mensaje.destinatario ==="todos"
    })
    setGlobalMessages(filteredMessages);
    //return filteredMessages;
    //console.log(filteredMessages);
    //console.log(globalMessages)
  }
  const showMessage = (contenido) => {
    console.log(contenido)
    return (<div>
      <p>
        {contenido}
      </p>
    </div>)
  }
  function renderGlobalMessages () {
    //console.log(mensajes)
    if (mensajes.length === 0) return <p>no hay mensajes globales</p>
    return mensajes.map((mensaje,index)=>
      <div
        key={index}
        className="mensajeGlobal"
      >
        <h3>asunto: </h3>
        <p>{mensaje.asunto}</p>
        <h3>Contenido: </h3>
        <p>{mensaje.contenido}</p>
      </div>
    )
  }

  return <>
    <Navbar accion="iniciar sesion" />
    <div
      className="dashboard"
    >
      <div
        className="cardFotoParqueo"
      ><img src="../assets/images/parqueo1.jpg" alt="" />
        aqui vendra foto del parqueo
      </div>
      <div
        className="cardMensajesGlobales"
      >
        <div className="tituloComunicados">
          <h2>Comunicados</h2>
        </div>
        <div className="mensajesGlobales">
          {renderGlobalMessages()}
        </div>
      </div>
    </div></>
}
export default PrincipalPage;