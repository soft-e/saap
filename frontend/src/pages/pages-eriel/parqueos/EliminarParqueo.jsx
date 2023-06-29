import '../../../assets/css/css-eriel/EditarParqueo.css';
import Parqueos from './Parqueos'
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint'
import { useEffect,useState} from 'react';

function EliminarParqueo() {
    const [parqueos,setParqueos]=useState([]);
    const navigate = useNavigate();
    const {id}=useParams();
    
    useEffect(()=>{
        fetchEmployeesData();
    },[]);
    
    const fetchEmployeesData = async () => {
        try {
          const response = await axios.get(`${URL_API}/parqueos`); 
          setParqueos(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }

    const eliminarParqueo = async (parqueoId) => {
        try {
          await axios.delete(`${URL_API}/parqueos/${parqueoId}`);
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
                <h2>Seguro de Eliminar</h2>
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
                       onClick={()=>eliminarParqueo(id)}
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