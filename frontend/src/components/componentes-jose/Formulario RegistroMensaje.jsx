import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate}  from 'react-router-dom';

const endPoint='http://127.0.0.1:8000/api/registrarmensaje';

export function FormularioRegistroMensaje() {

    const [contenido, setContenido] = useState('');
    const [asunto, setAsunto] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endPoint, {
            contenido: contenido,
            asunto: asunto,
            destinatario: destinatario
        })
        navigate('/vermensajes')
    }
    
    function handleClick (){
        navigate('/vermensajes')
    }

    return(
        <div className='cardRegistroPersonal_j'>
            <form onSubmit={store}>
                <div>
                    <label htmlFor='asunto'>Asunto</label>
                    <input 
                        className='input_j'
                        type='text'
                        id='asunto'
                        name='asubti'
                        placeholder='escribe el asunto del mensaje aqui'
                        value={asunto}
                        onChange={ (e) => setAsunto(e.target.value) }
                        />
                </div>
                <div>
                    <label htmlFor='contenido'>Contenido</label>
                    <textarea 
                        className='input_j'
                        type=''
                        id='contenido'
                        name='contenido'
                        placeholder='escribe el contenido de tu mensaje aqui'
                        value={contenido}
                        onChange={ (e) => setContenido(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor='destinatario'>Destinatario</label>
                    <input
                        className='input_j' 
                        type='text'
                        id='destinatario'    
                        name='destinatario'
                        placeholder='escribe el destinatario del mensaje'
                        value={destinatario}
                        onChange={ (e) => setDestinatario(e.target.value) }
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
    );
    
}