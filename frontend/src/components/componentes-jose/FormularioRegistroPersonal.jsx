import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import { Formik } from "formik";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate }  from 'react-router-dom';
import { URL_API } from "../../services/EndPoint"

const endPoint= URL_API+'/registrarempleados';
const endPointRescatar = URL_API+'/personas';

/**export function FormularioRegistroPersonas() {

    const [ci, setCi] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido_paterno, setApellido_paterno] = useState('')
    const [apellido_materno, setApellido_materno] = useState('')
    const [telefono, setTelefono] = useState('')
    const [nombre_cargo, setNombre_cargo] = useState('Guardia')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endPoint, {
            ci: ci,
            nombre: nombre,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno,
            telefono: telefono,
            nombre_cargo: nombre_cargo,
            email: email,
            password: password,
        });
        navigate('/personal');
    }


    function handleClick (){
        navigate('/personal')
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
                    <label htmlFor='nombre_cargo'>Empleado</label>
                    <select 
                        className='select_j'
                        value={ nombre_cargo }
                        onChange={ (e) => setNombre_cargo(e.target.value)}
                    >
                        <option value='Guardia'> Guardia </option>
                        <option value='Secretaria'>Secretaria</option>
                    </select>
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
    );
    
}*/

export const FormularioRegistroPersonas = () => {

    const navigate = useNavigate()
    const [personas, setPersonas] = useState( [] );

    useEffect( () => {
        obtenerEmpleado();
    }, []);

    const obtenerEmpleado = async () => {
        const response = await axios.get(endPointRescatar);
        setPersonas(response.data);
    }    

    function handleClick (){
        navigate('/personal')
    }

    function ciExistente(dato){
        let response = false;
        for(let i = 0; i< personas.length; i++){
            if(personas[i].ci.toString() == dato.toString()){
                response = true;
                break;
            }
        }
        return response;
    }

    function telefonoExistente(dato){
        let response = false;
        for(let i = 0; i< personas.length; i++){
            if(personas[i].telefono.toString() == dato.toString()){
                response = true;
                break;
            }
        }
        return response;
    }

    function emailExistente(dato){
        let response = false;
        for(let i = 0; i< personas.length; i++){
            if(personas[i].email.toString() == dato.toString()){
                response = true;
                break;
            }
        }
        return response;
    }

    return(
        <div className='cardRegistroPersonal_j'>
            <Formik
                initialValues={{
                    ci: '',
                    nombre: '',
                    apellido_paterno: '',
                    apellido_materno: '',
                    telefono: '',
                    nombre_cargo:'guardia',
                    email: '',
                    password:'',        
                }}

                validate={(valores) => {
                    let errores = {};

                    //validacion Celula de Identidad
                    if(!valores.ci){
                        errores.ci = 'el campo Celula de Intentidad es requerido obligatoriamente';
                    }else if(!/^[0-9\s]{1,9}$/.test(valores.ci)){
                        errores.ci = 'no es un numero';
                    }else if(ciExistente(valores.ci)){
                        errores.ci = 'el numero de carnet ya fue registrado';
                    }


                    //validacion para el nombre
                    if(!valores.nombre){
                        errores.nombre = 'el campo nombre es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'el campo no pude tener numeros';
                    }

                    //validacion apellido Paterno
                    if(!valores.apellido_paterno){
                        errores.apellido_paterno = 'el campo Apellido Paterno es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido_paterno)){
                        errores.apellido_paterno = 'el campo no pude tener numeros';
                    }

                    //validacion apellido Materno
                    if(!valores.apellido_materno){
                        errores.apellido_materno = 'el campo Apellido Materno es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido_materno)){
                        errores.apellido_materno = 'el campo no pude tener numeros';
                    }

                    //validacion Telefono
                    if(!valores.telefono){
                        errores.telefono = 'el campo Telefono es requerido obligatoriamente';
                    }else if(!/^[0-9\s]{1,10}$/.test(valores.telefono)){
                        errores.telefono = 'el campo no pude tener letras o caracteres especiales';
                    }else if(telefonoExistente(valores.telefono)){
                        errores.telefono = 'el numero de telefono ya fue registrado';
                    }

                    //validacion correo electronio
                    if(!valores.email){
                        errores.email = 'el campo Correo Electronico es requerido obligatoriamente';
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = 'el campo solo puede tener letras, numeros, gion y guion bajo';
                    }else if(emailExistente(valores.email)){
                        errores.email = 'el correo electronico ya fue registrado';
                    }

                    return errores;
                }}

                onSubmit={ (valores) => {
                    const store = async (e) => {
                        e.preventDefault()
                        await axios.post(endPoint, {
                            ci: valores.ci,
                            nombre: valores.nombre,
                            apellido_paterno: valores.apellido_paterno,
                            apellido_materno: valores.apellido_materno,
                            telefono: valores.telefono,
                            nombre_cargo: valores.nombre_cargo,
                            email: valores.email,
                            password: valores.password,
                        });
                        navigate('/personal');
                    }
                    store(event);
                }}
            >
                {({values, errors, touched, handleSubmit, handleChange, handleBlur, resetForm}) => (
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='ci'>Celula de Identidad</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='ci'
                            name='ci'
                            placeholder='escribe tu numero de carnet'
                            value={values.ci}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.ci && errors.ci && <div className='styleErrores_j'>{errors.ci}</div>}
                    </div>
                    <div>
                        <label htmlFor='nombre'>nombres</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='escribe tu nombre'
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.nombre && errors.nombre && <div className='styleErrores_j'>{errors.nombre}</div>}
                    </div>
                    <div>
                        <label htmlFor='apellido_paterno'>Apellido Paterno</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='apellido_paterno'    
                            name='apellido_paterno'
                            placeholder='escribe tu apellido Paterno'
                            value={values.apellido_paterno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.apellido_paterno && errors.apellido_paterno && <div className='styleErrores_j'>{errors.apellido_paterno}</div>}
                    </div>
                    <div>
                        <label htmlFor='apellido_materno'>Apellido Materno</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='apellido_materno'
                            name='apellido_materno'
                            placeholder='escribe tu apellido Materno'
                            value={values.apellido_materno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.apellido_materno && errors.apellido_materno && <div className='styleErrores_j'>{errors.apellido_materno}</div>}
                    </div>
                    <div>
                        <label htmlFor='telefono'>Telefono</label>
                        <input 
                            className='input_j'
                            type='text'
                            id='telefono'
                            name='telefono'
                            placeholder='escribe tu numero de Telefono'
                            value={values.telefono}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.telefono && errors.telefono && <div className='styleErrores_j'>{errors.telefono}</div>}
                    </div>
                    <div>
                        <label htmlFor='nombre_cargo'>Empleado</label>
                        <select 
                            className='input_j'
                            type='text' 
                            id='nombre_cargo'
                            name="nombre_cargo"
                            value={values.nombre_cargo}
                            onChange={handleChange}
                        >
                            <option value='guardia'> Guardia </option>
                            <option value='secretaria'>Secretaria</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='email'>Correo Electronico</label>
                        <input 
                            className='input_j'
                            type='email'
                            id='email'
                            name='email'
                            placeholder='escribe tu Correo Electronio'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && <div className='styleErrores_j'>{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input 
                            className='input_j'
                            type='password'
                            id='password'
                            name='password'
                            placeholder='escribe tu contraseña aqui'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                )}
            </Formik>
            
        </div>
    );
}