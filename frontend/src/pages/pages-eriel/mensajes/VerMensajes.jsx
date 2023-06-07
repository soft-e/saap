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
        document.getElementById('listadoMensajes').innerHTML=respuesta;
    })

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
    let mensajesHTML='';
    for(let i=0; i< mensajes.length; i++) {
        mensajesHTML+=`
        <div 
            id="barraDeAbajo"
            class="barraDeAbajo" 
            key=${i}
           
        >
            <h3>${i+1}</h3>
            <h3>asunto:${mensajes[i].asunto}</h3>
            <h3>Destinatario:${mensajes[i].destinatario}</h3>
        </div>
        `
    }
    let titulo='<h2>Mensajes Redactados</h2>';
    let respuesta=titulo+mensajesHTML;
    return<>
        <Navbar/>
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
                    <div className="contenedorDeMensajes" id="listadoMensajes">
                        {/*<h2>Mensajes Redactados</h2>
                        {mensajes.map((mensaje,index)=>(
                          <div className="barraDeAbajo" key={mensaje.id} onClick={()=>navigate(`/vercontenidodemensaje/${mensaje.id}`)}>
                                <h3>{index+1}</h3>
                                <h3>asunto: {mensaje.asunto}</h3>
                                <h3>Destinatario: {mensaje.destinatario}</h3>
                          </div>
                        ))}*/}
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default VerMensajes;