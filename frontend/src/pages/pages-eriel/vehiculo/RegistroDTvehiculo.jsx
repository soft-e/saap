import "../../../assets/css/css-eriel/RegistroDTvehiculo.css"
import "../../../assets/css/templatePage.css";
import Navbar from "../../../components/Navbar";
import ButtonBoxAdmin from "../../../components/ButtonBoxAdmin";
import { useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint';
import axios from 'axios';

function RegistroDTvehiculo() {
    const {id}=useParams();
    const [placa,setvehiculoDato]=useState('');
    const [color,setcolor]=useState(''); 
    const [marca,setmarca]=useState(''); 
    const [modelo,setmodelo]=useState('');
    const [dato, setData] = useState([]);
    const navigate=useNavigate();

    const store=async(e)=>{  
        e.preventDefault();
        const response=await axios.post(`${URL_API}/vehiculos`,{
            placa:placa,
            color:color,
            marca:marca,
            modelo:modelo
        })
        const nuevoRegistroConID = response.data;
        setData([dato, nuevoRegistroConID]);
        navigate(`/asignarSitio/${id}/${nuevoRegistroConID.id}`) 
    }
    /*function handleCancel(event) {
        event.preventDefault();
        setvehiculoDato('');
        setcolor('');
        setmarca('');
        setmodelo('');
        
    }*/


    return<>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="espacioDeTrabajo">
                <div className="padreVehiculo" onSubmit={store}>
                    <form action="" className='formularioDTvehiculo'>
                        <div className='contenedorDTvehiculo'>
                            <h1 id='tituloRegistroVH'>Datos del Vehiculo</h1>
                            <div id='entradaVH' className='entradaVH1'>
                                <label>placa</label>
                                <input 
                                    type="text" 
                                    value={placa}
                                    onChange={(e)=>setvehiculoDato(e.target.value)}
                                    id='inputText'
                                    placeholder='Ingrese la placa del viculo'
                                    required
                                />
                            </div>
                            <div id='entradaVH' className='entradaVH2'>
                                <label>Color</label>
                                <input
                                    value={color}
                                    onChange={(e)=>setcolor(e.target.value)}
                                    type="text" 
                                    id='inputText'
                                    placeholder='Ingrese el color '
                                    required
                                />
                            </div>
                            <div id='entradaVH' className='entradaVH3'>
                                <label>Marca</label>
                                <input 
                                    type="text" 
                                    value={marca}
                                    onChange={(e)=>setmarca(e.target.value)}
                                    id='inputText'
                                    placeholder='Ingrese la marca'
                                    required
                                />
                            </div>
                            <div id='entradaVH' className='entradaVH4'>
                                <label>Modelo</label>
                                <input 
                                    type="text" 
                                    value={modelo}
                                    onChange={(e)=>setmodelo(e.target.value)}
                                    id='inputText'
                                    placeholder='Ingrese el modelo'
                                    required
                                />
                            </div>
                            <div className='contenedorBotonVH'>
                                <button className='botonInicioSesion' type='submit'>
                                    Registrar
                                </button>

                                <button 
                                    id="botonCancelarVH"
                                    className='botonInicioSesion' 
                                    type='submit'
                                    onClick={()=>navigate('/listarDocentes')}
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
export default RegistroDTvehiculo;