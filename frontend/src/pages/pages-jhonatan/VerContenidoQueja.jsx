import '../../assets/css/css-eriel/VerContenidoMensaje.css';
import VerQuejas from './VerQuejas';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import {URL_API} from '../../services/EndPoint';


function VerContenidoQueja() {
  const [queja, setQueja] = useState({});
  const [respuesta, setRespuesta] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchQuejasData();
    fetchRespuestaData();
  }, []);

  const fetchQuejasData = async () => {
    try {
      const response = await axios.get(`${URL_API}/quejas/${id}`);
      setQueja(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error al obtener los datos de la queja:', error);
    }
  };

  const fetchRespuestaData = async () => {
    try {
      const response = await axios.get(`${URL_API}/quejas/${id}/respuesta`);
      setRespuesta(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error al obtener los datos de la respuesta:', error);
    }
  };

  return (
    <>
      <div className="VerContenidoMensajePadre">
      <VerQuejas/>
        <div className="ModalContenidoMensaje" onClick={() => navigate('/verquejas')}>
          <div className="contenedorMensajeModal">
            <h3 className="tituloMensajeModal">Asunto:</h3>
            <h3 className="contenidoMensajeModal">{queja.asunto}</h3>
            <h3 className="tituloMensajeModal">Contenido:</h3>
            <h4>{queja.contenido}</h4>
            <h3 className="tituloMensajeModal">Respuesta:</h3>
            <h4>{queja.respuesta}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerContenidoQueja;