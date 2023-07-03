import '../../../assets/css/css-eriel/EditarParqueo.css';
import Parqueos from './Parqueos'
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint'
import { useEffect,useState} from 'react';

function EliminarParqueo() {
    const [parqueos,setParqueos]=useState([]);
    const navigate = useNavigate();
    const {id,nombre}=useParams();
    useEffect(()=>{
        fetchEmployeesData();
    },[]);
    
    const fetchEmployeesData = async () => {
        try {
          const response = await axios.get(`${URL_API}/parqueos`); 
          setParqueos(response.data);
          parqueos
        } catch (error) {
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }
    
    const eliminarParqueo = async (parqueoId,nombre) => {
        try {
          await axios.delete(`${URL_API}/parqueos/${parqueoId}`);
          await axios.delete(`${URL_API}/contratos/eliminarRegistros/${nombre}`);
          fetchEmployeesData() 
        } catch (error) {
          console.error('Error al eliminar el empleado:', error);
        }
        navigate('/parqueos');
    };

    return(
    <div className='editarParqueoPadre'>
        <Parqueos/>
        <div className='Modal'>
        <div className='padreEditarParqueo' >
            <div className='tituloEditarParqueo'>
                <h3>Seguro de Eliminar , esta accion eliminar tanto los contratos que esten registrados en el parqueo</h3>
            </div>
            <div className='botonEditarParqueo'>
                    <button 
                    type='submit'
                    className='Btn-actualizar'
                    onClick={() => navigate("/parqueos")}
                    >
                        Cancelar
                    </button>
                    <button 
                       className='botonCancelarEditarParqueo'
                       onClick={()=>eliminarParqueo(id,nombre)}
                    >
                        Eliminar
                    </button>
            </div>
        </div>
    </div>
    </div>
    )
}
export default EliminarParqueo;