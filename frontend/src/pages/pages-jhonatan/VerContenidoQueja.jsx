import '../../assets/css/css-eriel/VerContenidoMensaje.css';
import VerQuejas from './VerQuejas';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import {URL_API} from '../../services/EndPoint';

function VerContenidoQueja() {
    const [queja,setQueja]=useState([]);
    const navigate=useNavigate();
    const {id}=useParams();
    
    useEffect(()=>{
        fetchQuejasData();
    },[])

    const fetchQuejasData = async () => {
        try {
          const response = await axios.get(`${URL_API}/quejas/${id}`); 
          setQueja(response.data);
          console.log(response);
        } catch (error) { 
          console.error('Error al obtener los datos de las quejas:', error);
        }
    }

    return<>
       <div className='VerContenidoMensajePadre'>
           <VerQuejas/>
           <div className='ModalContenidoMensaje' onClick={()=>{navigate('/verquejas')}}>
               <div className='contenedorMensajeModal'>
                   <h3 className='tituloMensajeModal'>Asunto:</h3>
                   <h3 className='contenidoMensajeModal'>{queja.asunto}</h3>
                   <h3 className='tituloMensajeModal'>Contenido:</h3>
                   <h4 >{queja.contenido}</h4>
               </div>
           </div>
       </div>
    </>  
}
export default VerContenidoQueja;