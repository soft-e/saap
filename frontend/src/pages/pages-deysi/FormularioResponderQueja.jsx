// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../../assets/css/css-deysi/formularioResponderQueja.css";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { URL_API } from "../../services/EndPoint";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function FormularioResponderQueja() {
  const [subject, setSubject] = useState("");
  const [response, setResponse] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params.id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const respuestaQueja = {
      asunto: subject,
      contenido: response,
      queja_id: params.id,
    };

    axios
      .post(`${URL_API}/responderquejas`, respuestaQueja)
      
      .then((response) => {
        console.log("Respuesta enviada:", response.data);
        navigate("/verquejas");
      })
      .catch((error) => {
        console.error("Error al enviar la respuesta:", error);
      });
  };

  const handleCancel = () => {
    navigate("/verquejas");
    setSubject("");
    setResponse("");
  };

  return (
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="padreParqueo">
            <form className="formularioParqueo" onSubmit={handleSubmit}>
              <div className="contenedorParqueo">
                <h1 id="tituloParqueo">Responder Queja</h1>

                <label htmlFor="subject" className="textoAsunto">
                  Asunto:
                </label>
                <div className="entradaP">
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    placeholder="Asunto"
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>

                <label htmlFor="response" className="textoResponder">
                  Responder queja:
                </label>
                <div className="entradaP">
                  <textarea
                    id="response"
                    rows={10}
                    cols={50}
                    placeholder="Escribe la respuesta de la queja"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    style={{ width: "100%" }} // Aplica el ancho completo del contenedor
                  />
                </div>


                <div className="contenedorBotonP">
                  <button className="botonInicioSesion" type="submit">
                    Registrar
                  </button>

                  <button
                    id="cancelar"
                    className="botonInicioSesion botonCancelar"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormularioResponderQueja;
