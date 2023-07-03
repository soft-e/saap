import "../../../assets/css/css-eriel/RegistroDTvehiculo.css"
import "../../../assets/css/templatePage.css";
import Navbar from "../../../components/Navbar";
import ButtonBoxAdmin from "../../../components/ButtonBoxAdmin";
import { useState,useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {URL_API} from '../../../services/EndPoint';
import axios from 'axios';

function RegistroDTvehiculo() {
    const {id}=useParams();
    const [placa,setplaca]=useState('');
    const [color,setcolor]=useState(''); 
    const [marca,setmarca]=useState(''); 
    const [modelo,setmodelo]=useState('');
    const [dato, setData] = useState([]);
    const [placas,setplacas]=useState([]);
    const navigate=useNavigate();
    

    useEffect(()=>{
        fetchEmployeesData();
    },[]);

    const fetchEmployeesData = async () => {
        try {
          const placas1 = await axios.get(`${URL_API}/vehiculos`); 
          const data1=await placas1.data;
          const placas2 = await axios.get(`${URL_API}/vehiculosExtras`); 
          const data2=await placas2.data;
          const lista = [...data1, ...data2];
          setplacas(lista);   
        } catch (error) {
          console.error('Error al obtener los datos de los empleados:', error);
        }
    }
 
    const handleSubmit =async (e) => {
        e.preventDefault();
        await validar();
    }

    const validar=async()=>{
        const placaExistente = placas.find((item) => item.placa === placa);
        if (placaExistente) {
            alert("La placa ya existe. No se puede registrar.");
        } else {
            await store();
        }
    }

    async function store(){  
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

    const handleGoBack = () => {
        navigate("/listarDocentes?estado=false")
    };

    const handleChange = (event) => {
        setplaca(event.target.value);
    };

    return<>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="espacioDeTrabajo">
                <div className="padreVehiculo">
                    <form action="" className='formularioDTvehiculo' onSubmit={handleSubmit}>
                        <div className='contenedorDTvehiculo'>
                            <h1 id='tituloRegistroVH'>Datos del Vehiculo</h1>
                            <div id='entradaVH' className='entradaVH1'>
                                <label>placa</label>
                                <input 
                                    type="text" 
                                    maxLength={15}
                                    value={placa}
                                    pattern="^\d{3,4}[A-Za-z]{3}$" title="Debe contener entre 3 o 4 números seguidos de 3 letras, por ejemplo 123ert o 5467yuh"
                                    onChange={handleChange}                                    placeholder='Ingrese la placa del viculo'
                                    required
                                />
                            </div>
                            <div id='entradaVH' className='entradaVH2'>
                                <label>Color</label>
                                <input
                                    value={color}
                                    pattern="[A-Za-z]+" title="solo se permiten letras"
                                    maxLength={15}
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
                                    maxLength={15}
                                    pattern="[A-Za-z]+" title="solo se permiten letras"
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
                                    pattern="[A-Za-z0-9]+" title="Solo se permiten letras y números"
                                    onChange={(e)=>setmodelo(e.target.value)}
                                    id='inputText'
                                    placeholder='Ingrese el modelo'
                                    maxLength={15}
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
                                    onClick={handleGoBack}
                                    /*onClick={()=>navigate('/listarDocentes')}*/
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