import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate}  from 'react-router-dom';
import {URL_API} from '../../services/EndPoint'

const endPoint= URL_API;

export function FormularioRegistroClientes() {

    const [ci, setCi] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido_paterno, setApellido_paterno] = useState('');
    const [apellido_materno, setApellido_materno] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const password =  ci;
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endPoint, {
            ci: ci,
            nombre: nombre,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno,
            telefono: telefono,
            email: email,
            password: password,
        })
        navigate('/')
    }
    
    return(
        <div className='cardRegistroPersonal_j'>
            <form onSubmit={store}>
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
                <div className="espacioBoton_j">
                    <button  className='stylesButton_j' type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
    
}