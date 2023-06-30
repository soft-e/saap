import "../../assets/css/css-eriel/VerMensajes.css";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";

function VerQuejas() {
  const [quejas, setQuejas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchQuejasData();
  }, []);

  const fetchQuejasData = async () => {
    try {
      const response = await axios.get(`${URL_API}/quejas`);
      setQuejas(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los datos de las quejas:", error);
    }
  };
  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="padreVerMensajes">
            <nav className="menuVerMensajes">
              <h2 className="tituloMenuDeMensajes">Quejas</h2>
            </nav>
            <div className="contenedorDeMensajes">
              <h2>Quejas Redactadas</h2>
              {quejas.map((queja, index) => (
                <div
                  className="barraDeAbajo"
                  key={queja.id}
                  onClick={() => navigate(`/vercontenidodequeja/${queja.id}`)}
                >
                  <h3>{index + 1}</h3>
                  <h3>Asunto: {queja.asunto}</h3>
                  <button
                    className="botonResponderQueja"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/responderquejas/${queja.id}`);
                    }}
                  >
                    Responder Queja
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerQuejas;
