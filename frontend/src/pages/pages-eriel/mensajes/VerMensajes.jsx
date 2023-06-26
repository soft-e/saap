import "../../../assets/css/css-eriel/VerMensajes.css"
import "../../../assets/css/templatePage.css";
import Navbar from "../../../components/Navbar";
import ButtonBoxAdmin from "../../../components/ButtonBoxAdmin";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {URL_API} from '../../../services/EndPoint';

function VerMensajes() {
    const [mensajes,setMensajes]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetchMensajesData();
    },[]);

    const fetchMensajesData = async () => {
        try {
          const response = await axios.get(`${URL_API}/mensajes`); 
          setMensajes(response.data);
          console.log(response);
        } catch (error) { 
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }

    function handleClick () {
        navigate('/registrarmensaje');
    }

    return<>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin/>
            <div className="espacioDeTrabajo">
                <div className="padreVerMensajes">
                    <nav className="menuVerMensajes">
                        <h2 className="tituloMenuDeMensajes">mensajes</h2>
                        <button 
                            className="botonMenuDeMensajes"
                            onClick={ handleClick }
                        >
                            Redactar Mensaje
                        </button>                
                    </nav>
                    <div className="contenedorDeMensajes">
                        <h2>Mensajes Redactados</h2>
                        <div className="listaDeMensaje">
                        {mensajes.map((mensaje,index)=>(
                          <div className="barraDeAbajo" key={mensaje.id} onClick={()=>navigate(`/vercontenidodemensaje/${mensaje.id}`)}>
                                <h3>{index+1}</h3>
                                <h3>asunto: {mensaje.asunto}</h3>
                                <h3>Destinatario: {mensaje.destinatario}</h3>
                          </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default VerMensajes;