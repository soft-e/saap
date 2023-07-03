import '../../../assets/css/css-eriel/RegistroParqueo.css'
import "../../../assets/css/templatePage.css";
import Navbar from "../../../components/Navbar";
import ButtonBoxAdmin from "../../../components/ButtonBoxAdmin";
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {URL_API} from '../../../services/EndPoint';
import { useSession } from '../../../context/context-rodrigo/SessionProvider';

function RegistroParqueo() {
    const { user } = useSession();
    const [nombre_bloque,setnombre_bloque]=useState('');
    const [cantidad_sitios,setcantidad_sitios]=useState(0); 
    const [data,setData]=useState("");
    const empleado_id=user.id;
    const navigate=useNavigate();

    useEffect(()=>{
    },[]);

    const store = async (e) => {
        e.preventDefault();
    
        try {
          // Registrar el parqueo en la tabla 'parqueos'
          const response = await axios.post(`${URL_API}/parqueos`, {
            nombre_bloque: nombre_bloque,
            cantidad_sitios: cantidad_sitios,    
            empleado_id: empleado_id
          });
          const nuevoRegistroConID = response.data;
          setData([data, nuevoRegistroConID]);
          // Crear registros en la tabla 'sitios' para cada sitio del parqueo
          const sitios = [];
          for (let i = 1; i <= nuevoRegistroConID.cantidad_sitios; i++) {
           // console.log("queeee essssssssss", nuevoParqueo);
            sitios.push({
              parqueo_id: nuevoRegistroConID.id,
              numero_sitio: i,
              estado_sitio: 'libre'
            });
          }
          await axios.post(`${URL_API}/sitio`, sitios);
          navigate('/parqueos');
        } catch (error) {
          console.error('Error al registrar el parqueo:', error);
        }
      };

    function handleCancel(event) {
        event.preventDefault();
        setnombre_bloque('');
        setcantidad_sitios('');
        navigate("/parqueos")
    }

    return<>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="espacioDeTrabajo">
                <div className='padreParqueo' onSubmit={store}>
                    <form action="" className='formularioParqueo'>
                            <div className='contenedorParqueo'>
                                <h1 id='tituloParqueo'>Registro de Parqueo</h1>
                                <div id='entradaP' className='entradaP1'>
                                    <label>Nombre de Parqueo</label>
                                    <input 
                                        type="text" 
                                        value={nombre_bloque}
                                        onChange={(e)=>setnombre_bloque(e.target.value)}
                                        id='inputText'
                                        placeholder='Escribe el nombre'
                                        required
                                    />
                                </div>
                                <div id='entradaP' className='entradaP2'>
                                    <label>Numero de Espacios</label>
                                    <input
                                        value={cantidad_sitios}
                                        onChange={(e)=>setcantidad_sitios(e.target.value)}
                                        type="number" 
                                        id='inputText'
                                        placeholder='Escribe el numero de espacios'
                                        required
                                    />
                                </div>
                                <div className='contenedorBotonP'>
                                    <button className='botonInicioSesion' type='submit'>
                                        Registrar
                                    </button>
                                    <button 
                                        id='botonCancelarP'
                                        className='botonInicioSesion' 
                                        type='submit'
                                        onClick={handleCancel}
                                    >
                                        Cancelar
                                    </button>
                                    
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </> 
}
export default RegistroParqueo;