import '../../assets/css/css-eriel/Parqueos.css';
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const endPoint='http://localhost:8000/api';


function Parqueos() {
    const [parqueos,setParqueos]=useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetchEmployeesData();
    },[])

    const fetchEmployeesData = async () => {
        try {
          const response = await axios.get(`${endPoint}/parqueos`); 
          setParqueos(response.data);
        } catch (error) {
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }

    const eliminarParqueo = async (parqueoId) => {
        try {
          await axios.delete(`${endPoint}/parqueos/${parqueoId}`);
          fetchEmployeesData() 
        } catch (error) {
          console.error('Error al eliminar el empleado:', error);
        }
    };

    if (parqueos.length === 0) {
        return <>
        <Navbar/>
        <div className='espacioPagina'>
            <ButtonBoxAdmin/>
            <div className='espacioDeTrabajo'>
                <div className='padre'>
                    <nav className='cabezeraParqueo'>
                        <h2 id='tituloParqueos'>
                            parqueos
                        </h2>
                        <button 
                            className='botonInicioSesion' 
                            id='botonRegistrarParqueo'
                            onClick={()=>navigate('/registroparqueo')}
                        >
                            <h4>Registrar Parqueo</h4>
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
        <Navbar/>
        <div className='espacioPagina'>
            <ButtonBoxAdmin/>
            <div className='espacioDeTrabajo'>
                <div className='padre'>
                    <nav className='cabezeraParqueo'>
                        <h2 id='tituloParqueos'>
                            parqueos
                        </h2>
                        <button 
                            className='botonInicioSesion' 
                            id='botonRegistrarParqueo'
                            onClick={()=>navigate('/registroparqueo')}
                        >
                            <h4>Registrar Parqueo</h4>
                        </button>
                    </nav>
                    <div className='contenedorParqueos'>
                        {parqueos.map((parqueos)=>(
                        <div className='datosParqueo' key={parqueos.id}>
                            <div className='nombreParqueo'>
                                <h2>{parqueos.nombre_bloque}</h2>
                            </div>
                            <h3>Cantidad de sitios: {parqueos.cantidad_sitios}</h3>
                            <div className='contendorBotonesParqueos'>
                                <Link 
                                    className='botonEditarParqueos'
                                    to={`/editarparqueos/${parqueos.id}`}
                                >
                                    <h5>Editar</h5>
                                </Link>
                            
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
/*
<EditarParqueo 
                    nombre={parqueos.nombre_bloque}
                    cantidadSitios={parqueos.cantidad_sitios}                             isOpen={estadoModal} 
                    onClose={()=>cambiarEstadoModal(false)}
                />
*/