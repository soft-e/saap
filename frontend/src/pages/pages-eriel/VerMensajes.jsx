import "../../assets/css/css-eriel/VerMensajes.css"
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const endPoint='http://127.0.0.1:8000/api';

function VerMensajes() {
    const [mensajes,setMensajes]=useState([]);
    
    useEffect(()=>{
        fetchMensajesData();
    },[])

    const fetchMensajesData = async () => {
        try {
          const response = await axios.get(`${endPoint}/mensajes`); 
          setMensajes(response.data);
          console.log(response);
        } catch (error) { 
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }
    return<>
        <Navbar/>
        <div className="espacioPagina">
            <ButtonBoxAdmin/>
            <div className="espacioDeTrabajo">
                <div className="padreVerMensajes">
                    <nav className="menuVerMensajes">
                        <h2 className="tituloMenuDeMensajes">mensajes</h2>
                        <button className="botonMenuDeMensajes">
                            Redactar Mensaje
                        </button>                
                    </nav>
                    <div className="contenedorDeMensajes">
                        <h2>Mensajes Redactados</h2>
                        {mensajes.map((mensaje,index)=>(
                          <Link className="barraDeAbajo" key={mensaje.id} to={`/vercontenidomensaje/${mensaje.id}`}>
                                <h3>{index+1}</h3>
                                <h3>asunto: {mensaje.asunto}</h3>
                                <h3>Destinatario: {mensaje.destinatario}</h3>
                          </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default VerMensajes;