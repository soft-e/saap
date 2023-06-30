import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Formik, Field} from "formik";
import { useNavigate}  from 'react-router-dom';
import { URL_API } from '../../services/EndPoint'

const endPoint= URL_API+'/registrarqueja'

export const FormularioQuejasClt = (props) => {

    const navigate = useNavigate()

    function handleClick (){
        navigate('/client/complaints/'+props.docente_id);
    }

    return(
        <div className='cardRegistroPersonal_j'>
            <Formik
                initialValues={{
                    asunto: '',
                    contenido: '',
                }}

                validate={(valores) => {
                    let errores = {};

                    //validacion para asunto
                    if(!valores.asunto){
                        errores.asunto = 'el campo asunto es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(valores.asunto)){
                        errores.asunto = 'el campo no pude tener numeros';
                    }

                    //validacion para contenido
                    if(!valores.contenido){
                        errores.contenido = 'el campo contenido es requerido obligatoriamente';
                    }else if(!/^[0-9-a-zA-ZÀ-ÿ\s]{1,250}$/.test(valores.contenido)){
                        errores.contenido = 'el campo no pude tener caracteres especiales';
                    }

                    return errores;
                }}

                onSubmit={ (valores) => {
                    const store = async (e) => {
                        e.preventDefault()
                        await axios.post(endPoint, {
                            id_docente: props.docente_id,
                            asunto: valores.asunto,
                            contenido: valores.contenido,
                            respuesta: "S/R",
                            estado_adm: false,
                            estado_clt: false,
                        });
                        navigate('/client/complaints/'+props.docente_id);
                    }
                    store(event);
                }}
            >
                {({values, errors, touched, handleSubmit, handleChange, handleBlur, resetForm}) => (
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='asunto'>Asunto</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='asunto'
                            name='asunto'
                            placeholder='Asunto del mensaje'
                            value={values.asunto}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.asunto && errors.asunto && <div className='styleErrores_j'>{errors.asunto}</div>}
                    </div>
                    <div>
                        <label htmlFor='contenido'>contenido</label>
                        <textarea 
                            className='input_j'
                            type='textA'
                            id='contenido'
                            name='contenido'
                            placeholder='describe tu contenido'
                            value={values.contenido}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.contenido && errors.contenido && <div className='styleErrores_j'>{errors.contenido}</div>}
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
                )}
            </Formik>
            
        </div>
    );
}

/**export function FormularioQuejasClt( props ) {

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
}*/