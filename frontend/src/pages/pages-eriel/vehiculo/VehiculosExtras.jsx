import "../../../assets/css/css-eriel/RegistroDTvehiculo.css"
import "../../../assets/css/templatePage.css";
import Navbar from "../../../components/Navbar";
import ButtonBoxAdmin from "../../../components/ButtonBoxAdmin";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { URL_API } from '../../../services/EndPoint';
import axios from 'axios';

function VehiculosExtras() {
    const { id } = useParams();
    const [placa, setplaca] = useState('');
    const [color, setcolor] = useState('');
    const [marca, setmarca] = useState('');
    const [modelo, setmodelo] = useState('');
    const navigate = useNavigate();
    const [placas1, setplacas1] = useState('');
    const [placas2, setplacas2] = useState('');
    const [placaRepetida, setPlacaRepetida] = useState(false);

    /*const handleGoBack = () => {
        window.history.back();
    };*/

    useEffect(() => {
        fetchEmployeesData();
    }, []);

    const fetchEmployeesData = async () => {
        try {
            const placas1 = await axios.get(`${URL_API}/vehiculos`);
            setplacas1(placas1.data);
            const placas2 = await axios.get(`${URL_API}/vehiculosExtras`);
            setplacas2(placas2.data);
            console.log(placas1.data);
            console.log(placas2.data);

        } catch (error) {
            console.error('Error al obtener los datos de los empleados:', error);
        }
    }

    const validar = () => {
        for (let i = 0; i < placas1.length; i++) {
            if (placas1[i].placa === placa) {
                setPlacaRepetida(true);
                break;
            }
        }
        for (let i = 0; i < placas2.length; i++) {
            if (placas2[i].placa === placa) {
                setPlacaRepetida(true);
                break;
            }
        }
        console.log(placaRepetida)
    }


    const verificar2 = () => {
        setPlacaRepetida(false)
    };

    const store = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${URL_API}/vehiculosExtras`, {
            contrato_id: id,
            placa: placa,
            color: color,
            marca: marca,
            modelo: modelo
        })
        console.log(response)
        navigate('/contratos/show/' + id)

    }
    return <>
        <Navbar accion="iniciar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="espacioDeTrabajo">
                <p
                    className="botonAtras"
                    onClick={() => navigate("/contratos")}
                >IR ATRAS</p>
                <h1
                    className="tituloAtencion"
                >
                    Registro de vehiculos adicionales
                </h1>
                <p
                    className="informativo"
                >
                    El vehiculo adicional que se registre solo puede usar el sitio al que esta relacionado el titular del sitio
                </p>
                <div className="padreVehiculo" onSubmit={store}>
                    <form action="" className='formularioDTvehiculo'>
                        <div className='contenedorDTvehiculo'>
                            <h1 id='tituloRegistroVH'>Datos del Vehiculo</h1>
                            <div id='entradaVH' className='entradaVH1'>
                                <label>placa</label>
                                <input
                                    onClick={validar}
                                    type="text"
                                    value={placa}
                                    pattern="^\d{3,4}[A-Za-z]{3}$" title="Debe contener entre 3 o 4 números seguidos de 3 letras, por ejemplo 123ert o 5467yuh"
                                    onChange={(e) => setplaca(e.target.value)}
                                    id='inputText'
                                    placeholder='Ingrese la placa del viculo'
                                    required
                                />
                                {placaRepetida && <p>la placa existe</p>}
                            </div>
                            <div id='entradaVH' className='entradaVH2'>
                                <label>Color</label>
                                <input
                                    onClick={verificar2}
                                    value={color}
                                    pattern="[A-Za-z]+" title="solo se permiten letras"
                                    onChange={(e) => setcolor(e.target.value)}
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
                                    pattern="[A-Za-z]+" title="solo se permiten letras"

                                    onChange={(e) => setmarca(e.target.value)}
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
                                    onChange={(e) => setmodelo(e.target.value)}
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
                                    /*onClick={handleGoBack}*/
                                    onClick={() => navigate('/contratos/show/' + id)}
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
export default VehiculosExtras;