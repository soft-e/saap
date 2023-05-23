import '../../assets/css/css-eriel/RegistroParqueo.css'
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const endPoint='http://localhost:8000/api';

function RegistroParqueo() {

    const [nombre_bloque,setnombre_bloque]=useState('');
    const [cantidad_sitios,setcantidad_sitios]=useState(0); 
    const empleado_id=1;
    const navigate=useNavigate();

    const store=async(e)=>{
        e.preventDefault();
        await axios.post(`${endPoint}/parqueos`,{
        nombre_bloque:nombre_bloque,
        cantidad_sitios:cantidad_sitios,
        empleado_id:empleado_id})
        navigate('/parqueos');
    }
    function handleCancel(event) {
        event.preventDefault();
        setnombre_bloque('');
        setcantidad_sitios('');
    }


    return<>
        <Navbar accion="iniciar sesion"/>
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
                                    <button 
                                        className='botonInicioSesion' 
                                        type='submit'
                                    >
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