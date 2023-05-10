import "../../assets/css/css-eriel/RegistroDTvehiculo.css"
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const endPoint='http://localhost:8001/api';

function RegistroDTvehiculo() {
    const [placa,setplaca]=useState('');
    const [color,setcolor]=useState(''); 
    const [marca,setmarca]=useState(''); 
    const [modelo,setmodelo]=useState(''); 
    const navigate=useNavigate();

    const store=async(e)=>{
        e.preventDefault();
        await axios.post(`${endPoint}/vehiculos`,{
        placa:placa,
        color:color,
        marca:marca,
        modelo:modelo
        })
        navigate('/admin');
    }
    function handleCancel(event) {
        event.preventDefault();
        setplaca('');
        setcolor('');
        setmarca('');
        setmodelo('');
    }

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
                                    onChange={(e)=>setplaca(e.target.value)}
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

    /*return (
        <div className='padre' onSubmit={store}>
            <form action="" className='formulario'>
                <div className='contenedor'>
                    <h1 id='titulo'>Datos del Vehiculo</h1>
                    <div id='input' className='input1'>
                        <label>placa</label>
                        <input 
                            type="text" 
                            value={placa}
                            onChange={(e)=>setplaca(e.target.value)}
                            id='inputText'
                            placeholder='Ingrese la placa del viculo'
                            required
                        />
                    </div>
                    <div id='input' className='input2'>
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
                    <div id='input' className='input3'>
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
                    <div id='input' className='input4'>
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
                    <div className='espacioBoton'>
                        <button className='botonInicioSesion' type='submit'>
                            Registrar
                        </button>
                        <button 
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
    )*/
}
export default RegistroDTvehiculo;