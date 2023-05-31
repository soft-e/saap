import '../../assets/css/css-eriel/VerContenidoMensaje.css';
import VerMensajes from './VerMensajes';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const endPoint='http://localhost:8000/api';

function VerContenidoMensaje() {
    const [mensaje,setMensaje]=useState([]);
    const navigate=useNavigate();
    const {id}=useParams();
    
    useEffect(()=>{
        fetchMensajesData();
    },[])

    const fetchMensajesData = async () => {
        try {
          const response = await axios.get(`${endPoint}/mensajes/${id}`); 
          setMensaje(response.data);
          console.log(response);
        } catch (error) { 
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }

    return<>
       <div className='VerContenidoMensajePadre'>
           <VerMensajes/>
           <div className='ModalContenidoMensaje' onClick={()=>{navigate('/vermensajes')}}>
               <div className='contenedorMensajeModal'>
                   <h3 className='tituloMensajeModal'>Destinatario:</h3>
                   <h3 className='contenidoMensajeModal'>{mensaje.destinatario}</h3>
                   <h3 className='tituloMensajeModal'>asunto:</h3>
                   <h3 className='contenidoMensajeModal'>{mensaje.asunto}</h3>
                   <h3 className='tituloMensajeModal'>contenido:</h3>
                   <h4 >{mensaje.contenido}</h4>
               </div>
           </div>
       </div>
    </>  
}
export default VerContenidoMensaje;