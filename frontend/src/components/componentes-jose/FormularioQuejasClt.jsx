import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate}  from 'react-router-dom';
import { URL_API } from '../../services/EndPoint'

const endPoint= URL_API+'/registrarqueja';

export function FormularioQuejasClt() {

    const [contenido, setContenido] = useState('');
    const [asunto, setAsunto] = useState('');
    const [destino, setDestino] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endPoint, {
            id_docente: "1",
            asunto: asunto,
            contenido: contenido,
            estado_adm: false,
            estado_clt: false,
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
                        value={destino}
                        onChange={ (e) => setDestino(e.target.value) }
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