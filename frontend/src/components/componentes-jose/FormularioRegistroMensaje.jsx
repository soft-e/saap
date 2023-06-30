import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Formik, Field} from "formik";
import { useNavigate}  from 'react-router-dom';
import { URL_API } from '../../services/EndPoint'
import Select from 'react-select';

const endPoint= URL_API+'/registrarmensaje';
const endPointRescatar = URL_API+'/personas';


export const FormularioRegistroMensaje = () => {

    const navigate = useNavigate()
    const [personas, setPersonas] = useState( [] );
    const [selectedEmail, setSelectedEmail] = useState('');

    useEffect( () => {
        obtenerPersonas();
    }, []);


    const obtenerPersonas = async () => {
        const response = await axios.get(endPointRescatar);
        setPersonas(response.data);
    }    

    function handleClick (){
        navigate('/vermensajes')
    }

    function destinoExistente(dato){
        let response = false;
        for(let i = 0; i< personas.length; i++){
            if(personas[i].email.toString() == dato.toString()){
                response = true;
                break;
            }
        }
        return response;
    }

    function guardarIndividual(valores){
        const store = async (e) => {
            e.preventDefault()
            await axios.post(endPoint, {
                origen: valores.origen,
                destino: selectedEmail,
                asunto: valores.asunto,
                contenido: valores.contenido,
                estado: false,
            });
            navigate('/vermensajes');
        }
        store(event);
    }

    function guardarGrupal(valores){
        const store = async (e) => {
            e.preventDefault()
            await axios.post(endPoint, {
                origen: valores.origen,
                destino: 'todos',
                asunto: valores.asunto,
                contenido: valores.contenido,
                estado: true,
            });
            navigate('/vermensajes');
        }
        store(event);
    }

    const handleEmailChange = (option) => {
        setSelectedEmail(option ? option.email : ''); // Almacenar el correo electrónico seleccionado
    };

    return(
        <div className='cardRegistroPersonal_j'>
            <Formik
                initialValues={{
                    origen: 'administrador',
                    destino: '',
                    asunto: '',
                    contenido: '',
                }}

                validate={(valores) => {
                    let errores = {};

                    /**validacion de destino
                    if(valores.tipo === 'Individual'){
                        if(!valores.destino){
                            errores.destino = 'el campo Destino es requerido obligatoriamente';
                        }else if(!destinoExistente(valores.destino)){
                            errores.destino = 'debe ingresar un destino valido';
                        }
                    }*/

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
                    console.log(valores);
                    if(valores.tipo === 'Individual'){
                        guardarIndividual(valores);
                    }else{
                        guardarGrupal(valores);
                    }
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
                        <input 
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
                    <div>
                        <label htmlFor='tipo'>Tipo de Destinatario</label>
                        <select 
                            className='input_j'
                            type='text' 
                            id='tipo'
                            name="tipo"
                            value={values.tipo}
                            onChange={handleChange}
                        >
                            <option value='Global'> Global </option>
                            <option value='Individual'> Individual </option>
                        </select>
                    </div>
                    {values.tipo === 'Individual' ? (
                        /**<div>
                            <label htmlFor='destino'>Destino</label>
                            <input 
                                className='input_j'
                                type='text'
                                id='destino'
                                name='destino'
                                placeholder='escribe el correo del destino'
                                value={values.destino}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.destino && errors.destino && <div className='styleErrores_j'>{errors.destino}</div>}
                        </div>*/
                        <div>
                            <label htmlFor="destino">Destino:</label>
                            <Field name="destino">
                            {({ field }) => (
                                <Select
                                {...field}
                                className='input_j'
                                type='texto'
                                id="destino"
                                name="destino"
                                placeholder="ingresar el correo electronico"
                                value={personas.find((option) => option.email === selectedEmail)} // Establecer la opción seleccionada en el autocompletado
                                onChange={handleEmailChange}
                                options={personas}
                                getOptionLabel={(option) => option.email}
                                getOptionValue={(option) => option.id}
                                isClearable
                                />
                            )}
                            </Field>
                        </div>
                    ) : (
                        <div>
                            
                        </div>
                    )}
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

/**export function FormularioRegistroMensaje() {

    const [contenido, setContenido] = useState('');
    const [asunto, setAsunto] = useState('');
    const [destino, setDestino] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endPoint, {
            origen: "Administrador",
            destino: destino,
            asunto: asunto,
            contenido: contenido,
            estado: false,
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
}*/