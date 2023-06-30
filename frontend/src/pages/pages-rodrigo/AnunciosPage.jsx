import Navbar from "../../components/Navbar";
import { useMensajes } from "../../context/context-rodrigo/MensajeProvider";
import { useEffect } from "react";
import "../../assets/css/anuncios.css"
import { useNavigate } from "react-router-dom";


function AnunciosPage() {
  const { mensajes, loadMensajes } = useMensajes();
  const navigate = useNavigate();
  useEffect(() => {
    loadMensajes();

  }, [])
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
    <div className="espacioPagina">

      <p
        className="botonAtras"
        onClick={() => window.history.back()}
      >IR ATRAS</p>
      <div className="espacioDeTrabajoCompleto">

        <div
          className="cardMensajesGlobales"
        >
          <div className="tituloComunicados">
            <h2>Anuncios P&uacute;blicos</h2>
          </div>
          <div className="mensajesGlobales">
            {renderGlobalMessages()}
          </div>
        </div>
      </div>
    </div>
  </>
}
export default AnunciosPage;