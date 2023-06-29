import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";
import axios from "axios";

const endPointRescatar = URL_API+"/personas";
const endPointActualizar = URL_API+"/actualizarpersona";

function EditarPersonal(){
    const { id }= useParams();
    const navigate  = useNavigate();
    const [ci, setCi] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido_paterno, setApellido_paterno] = useState('')
    const [apellido_materno, setApellido_materno] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect( () => {
        obtenerEmpleado();
    }, []);

    const obtenerEmpleado = async () => {
        const response = await axios.get(endPointRescatar+"/"+id);
        setCi(response.data.ci);
        setNombre(response.data.nombre);
        setApellido_paterno(response.data.apellido_paterno);
        setApellido_materno(response.data.apellido_materno);
        setTelefono(response.data.telefono);
        setEmail(response.data.email);
        setPassword(response.data.password);
    }

    const update = async (e) => {
        e.preventDefault();
        await axios.put(endPointActualizar+"/"+id, {
            ci: ci,
            nombre: nombre,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno,
            telefono: telefono,
            email: email,
            password: password,
        });
        console.log("guardado")
        navigate('/personal');
    }

    function handleClick (){
        navigate('/personal')
    }

    return <>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal_j">
                <div className='cardRegistroPersonal_j'>
                <form onSubmit={update}>
                    <div>
                        <label htmlFor='ci'>Celula de Identidad</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='ci'
                            name='ci'
                            placeholder='escribe tu numero de carnet'
                            value={ci}
                            onChange={ (e) => setCi(e.target.value) }
                        />
                    </div>
                    <div>
                        <label htmlFor='nombre'>nombres</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='escribe tu nombre'
                            value={nombre}
                            onChange={ (e) => setNombre(e.target.value) }
                            />
                    </div>
                    <div>
                        <label htmlFor='apellido_paterno'>Apellido Paterno</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='apellido_paterno'    
                            name='apellido_paterno'
                            placeholder='escribe tu apellido Paterno'
                            value={apellido_paterno}
                            onChange={ (e) => setApellido_paterno(e.target.value) }
                            />
                    </div>
                    <div>
                        <label htmlFor='apellido_materno'>Apellido Materno</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='apellido_materno'
                            name='apellido_materno'
                            placeholder='escribe tu apellido Materno'
                            value={apellido_materno}
                            onChange={ (e) => setApellido_materno(e.target.value) }
                            />
                    </div>
                    <div>
                        <label htmlFor='telefono'>Telefono</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='telefono'
                            name='telefono'
                            placeholder='escribe tu numero de Telefono'
                            value={telefono}
                            onChange={ (e) => setTelefono(e.target.value) }
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Correo Electronico</label>
                        <input 
                            className='input_j'
                            type='email'
                            id='email'
                            name='email'
                            placeholder='escribe tu Correo Electronio'
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input 
                            className='input_j'
                            type='password'
                            id='password'
                            name='password'
                            placeholder='escribe tu contraseña aqui'
                            value={password}
                            onChange={ (e) => setPassword(e.target.value) }
                            />
                        </div>
                        <div className="espacioBotones_j">
                        <div className="espacioBoton_j">
                            <button  className='stylesButton_j' type="submit">
                                Guardar
                            </button>
                        </div>
                        <div className="espacioBoton_j">
                            <button className='stylesButton_j' onClick={ handleClick }>
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

export default EditarPersonal;