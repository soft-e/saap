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
    //const filteredMessages = mensajes.filter((mensaje)=>{
    //return mensaje.destinatario ==="todos"
    //})
    //setGlobalMessages(filteredMessages);
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
    console.log(mensajes)
    if (mensajes.length === 0) return <p>no hay mensajes globales</p>
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
          {renderGlobalMessages()}
        </div>
      </div>
    </div></>
}
export default PrincipalPage;