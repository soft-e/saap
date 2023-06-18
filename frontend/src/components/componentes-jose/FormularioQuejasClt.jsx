import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate}  from 'react-router-dom';
import { URL_API } from '../../services/EndPoint'

const endPoint= URL_API+'/registrarqueja'

export function FormularioQuejasClt( props ) {

    const [contenido, setContenido] = useState('');
    const [asunto, setAsunto] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endPoint, {
            id_docente: props.docente_id,
            asunto: asunto,
            contenido: contenido,
            respuesta: "S/R",
            estado_adm: false,
            estado_clt: false,
        })
        navigate('/client/complaints/'+props.docente_id);
    }
    
    function handleClick (){
        navigate('/client/complaints/'+props.docente_id)
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