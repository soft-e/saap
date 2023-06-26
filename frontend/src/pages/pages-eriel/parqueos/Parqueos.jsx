import '../../../assets/css/css-eriel/Parqueos.css';
import "../../../assets/css/templatePage.css";
import Navbar from "../../../components/Navbar";
import ButtonBoxAdmin from "../../../components/ButtonBoxAdmin";
import axios from 'axios';
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint'
import { useSession } from '../../../context/context-rodrigo/SessionProvider';

function Parqueos() {
    const { user } = useSession();
    const [parqueos,setParqueos]=useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetchEmployeesData();
    },[]);
    console.log(user);
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
    };
    if (Array.isArray(parqueos)){
        console.log("true");
    }

    if (parqueos.length === 0) {
        return <>
        <Navbar accion="cerrar sesion" />
        <div className='espacioPagina'>
            <ButtonBoxAdmin/>
            <div className='espacioDeTrabajo'>
                <div className='padre'>
                    <nav className='cabezeraParqueo'>
                        <h2 id='tituloParqueos'>
                            parqueos
                        </h2>
                        <button 
                             
                            id='botonRegistrarParqueo'
                            onClick={()=>navigate('/registroparqueo')}
                        >
                            <h4>Registrar Parqueo</h4>
                        </button>
                        <button 
                        
                        id='nuevoBoton'
                        onClick={()=>navigate('/sitios')}
                        >
                            <h4>Ver sitios</h4>
                        </button>
                    </nav>
                    <div className='textoCentrado'>
                        <h1>No hay ningún parqueo registrado</h1>
                    </div>
                </div>
            </div>
        </div>
        </> 
    }else{
    return <>
        <Navbar accion="cerrar sesion" />
        <div className='espacioPagina'>
            <ButtonBoxAdmin/>
            <div className='espacioDeTrabajo'>
                <div className='padre'>
                    <nav className='cabezeraParqueo'>
                        <h2 id='tituloParqueos'>
                            parqueos
                        </h2>
                        <button 
                            
                            id='botonRegistrarParqueo'
                            onClick={()=>navigate('/registroparqueo')}
                        >
                            <h4>Registrar Parqueo</h4>
                        </button>
                        <button 
                        
                        id='nuevoBoton'
                        onClick={()=>navigate('/sitios')}
                        >
                            <h4>Ver sitios</h4>
                        </button>
                    </nav>
                    <div className='contenedorParqueos'>
                        {parqueos?.map((parqueos,index)=>(
                        <div className='datosParqueo' key={index}>
                            <div>
                                <div className='nombreParqueo'>
                                    <h2>{parqueos.nombre_bloque}</h2>
                                </div>
                                <h3>Cantidad de sitios: {parqueos.cantidad_sitios}</h3>
                            </div>
                            <div className='contendorBotonesParqueos' >
                                <button
                                    className='botonEditarParqueos'
                                    onClick={() =>navigate(`/editarparqueos/${parqueos.id}/${parqueos.nombre_bloque}/${parqueos.cantidad_sitios}`)}
                                >
                                    <h4>Editar</h4>
                                </button>
                            
                                <button className='botonEliminarParqueos'
                                        onClick={()=>eliminarParqueo(parqueos.id)}
                                >
                                    <h4>Eliminar</h4>
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </>
 }   
}
export default Parqueos;
