import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { Formik } from "formik";
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { URL_API } from "../../services/EndPoint";
import axios from "axios";

const endPointRescatar = URL_API+"/personas";
const endPointActualizar = URL_API+"/actualizarpersona";


function EditarPersonal(){

    const navigate = useNavigate()
    const [personas, setPersonas] = useState( [] );
    const [persona, setPersona] = useState( [] );
    const { id }= useParams();

    useEffect( () => {
        obtenerEmpleado();
        obtenerPersona();
    }, []);

    const obtenerPersona = async () => {
        const response = await axios.get(endPointRescatar+"/"+id)
        setPersona(response.data);
    }
    
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
            if(personas[i].ci.toString() == dato.toString() && personas[i].id != id){
                response = true;
                break;
            }
        }
        return response;
    }

    function telefonoExistente(dato){
        let response = false;
        for(let i = 0; i< personas.length; i++){
            if(personas[i].telefono.toString() == dato.toString() && personas[i].id != id){
                response = true;
                break;
            }
        }
        return response;
    }

    function emailExistente(dato){
        let response = false;
        for(let i = 0; i< personas.length; i++){
            if(personas[i].email.toString() == dato.toString() && personas[i].id != id){
                response = true;
                break;
            }
        }
        return response;
    }

    return(<>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal_j">
                <div className='cardRegistroPersonal_j'>
                {console.log(persona)}
                    <Formik
                        initialValues={{
                            ci: persona.ci,
                            nombre: persona.nombre,
                            apellido_paterno: persona.apellido_paterno,
                            apellido_materno: persona.apellido_materno,
                            telefono: persona.telefono,
                            email: persona.email,
                            password: persona.password,
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
                                await axios.put(endPointActualizar+"/"+id, {
                                    ci: valores.ci,
                                    nombre: valores.nombre,
                                    apellido_paterno: valores.apellido_paterno,
                                    apellido_materno: valores.apellido_materno,
                                    telefono: valores.telefono,
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
                                <h3>Editar persona</h3>
                            </div>
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
            </div>
        </div>
        </>
    );
}
export default EditarPersonal;

/**function EditarPersonal(){
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

export default EditarPersonal;*/