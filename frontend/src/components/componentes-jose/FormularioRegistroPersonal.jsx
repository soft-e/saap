import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import { Formik } from "formik";
import axios from 'axios';

const endPoint='http://127.0.0.1:8000/api';


export const FormularioRegistroPersonas = () => {

    return(
        <div className='cardRegistroPersonal'>
            <Formik
                initialValues={{
                    ci: '',
                    nombre: '',
                    apellido_paterno: '',
                    apellido_materno: '',
                    telefono: '',
                    nombre_cargo:'Guardia',
                    email: '',
                    password:'',
                }}

                validate={(valores) => {
                    let errores = {};

                    //validacion Celula de Identidad
                    if(!valores.ci){
                        errores.ci = 'el campo Celula de Intentidad es requerido obligatoriamente';
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
                    }

                    //validacion correo electronio
                    if(!valores.email){
                        errores.email = 'el campo Correlo Electronico es requerido obligatoriamente';
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = 'el campo solo puede tener letras, numeros, gion y guion bajo';
                    }

                    return errores;
                }}

                onSubmit={ async (valores, {resetForm}, e) => {
                    resetForm();
                    console.log(valores);
                    await axios.post(`${endPoint}/registrarEmpleados`,{valores})
                    navigate('/');
                    console.log('formulario Enviado');
                }}
            >
                {({values, errors, touched, handleSubmit, handleChange, handleBlur, resetForm}) => (
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='ci'>Celula de Identidad</label>
                        <input 
                            type='text'
                            id='ci'
                            name='ci'
                            placeholder='escribe tu numero de carnet'
                            value={values.ci}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.ci && errors.ci && <div className='styleErrores'>{errors.ci}</div>}
                    </div>
                    <div>
                        <label htmlFor='nombre'>nombres</label>
                        <input 
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='escribe tu nombre'
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.nombre && errors.nombre && <div className='styleErrores'>{errors.nombre}</div>}
                    </div>
                    <div>
                        <label htmlFor='apellido_paterno'>Apellido Paterno</label>
                        <input 
                            type='text'
                            id='apellido_paterno'    
                            name='apellido_paterno'
                            placeholder='escribe tu apellido Paterno'
                            value={values.apellido_paterno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.apellido_paterno && errors.apellido_paterno && <div className='styleErrores'>{errors.apellido_paterno}</div>}
                    </div>
                    <div>
                        <label htmlFor='apellido_materno'>Apellido Materno</label>
                        <input 
                            type='text'
                            id='apellido_materno'
                            name='apellido_materno'
                            placeholder='escribe tu apellido Materno'
                            value={values.apellido_materno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.apellido_materno && errors.apellido_materno && <div className='styleErrores'>{errors.apellido_materno}</div>}
                    </div>
                    <div>
                        <label htmlFor='telefono'>Telefono</label>
                        <input 
                            type='text'
                            id='telefono'
                            name='telefono'
                            placeholder='escribe tu numero de Telefono'
                            value={values.telefono}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.telefono && errors.telefono && <div className='styleErrores'>{errors.telefono}</div>}
                    </div>
                    <div>
                        <label htmlFor='nombre_cargo'>Empleado</label>
                        <select 
                            type='text' 
                            id='nombre_cargo'
                            name="nombre_cargo"
                        >
                            <option value='Guardia'> Guardia </option>
                            <option value='Secretaria'>Secretaria</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='email'>Correo Electronico</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='escribe tu Correo Electronio'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.correo && errors.correo && <div className='styleErrores'>{errors.correo}</div>}
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='escribe tu contraseña aqui'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="espacioBoton">
                        <button  className='stylesButton' type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
                )}
            </Formik>
            
        </div>
    );
}
