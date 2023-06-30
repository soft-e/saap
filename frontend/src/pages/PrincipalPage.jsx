import { useEffect, useState } from "react";
import "../assets/css/principalPage.css"
import Navbar from "../components/Navbar";
import { useMensajes } from "../context/context-rodrigo/MensajeProvider";
import parqueo1 from "../assets/images/parqueo1.jpg";
import parqueo2 from "../assets/images/parqueo2.png";
import portada from "../assets/images/Decanato_fcyt.jpg"

function PrincipalPage() {
  const { mensajes, loadMensajes } = useMensajes();
  const [globalMessages, setGlobalMessages] = useState([]);

  useEffect(() => {
    loadMensajes();
    const messages = mensajes;
    setGlobalMessages(messages);
  }, [])

  //console.log(mensajes);
  const loadGlobalmessages = () => {
    const filteredMessages = mensajes.filter((mensaje) => {
      return mensaje.destinatario === "todos"
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
  function renderGlobalMessages() {
    //console.log(mensajes)
    if (mensajes.length === 0) return <p>no hay mensajes globales</p>
    return mensajes.map((mensaje, index) =>
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
        className="todaLaPortada"
      >
        <h1 className="tituloPortada">
          Sistema de Apoyo a la Administraci&oacute;n de Parqueos
        </h1>
        <p
          className="mensajePortada"
        >Bienvenido al sistema de apoyo a la administracion de parqueos de la Faculta de Ciencias y Tecnolog&iacute;a</p>
        <img
          className="portada"
          src={portada} alt="" />
      </div>
    </div></>
}
export default PrincipalPage;