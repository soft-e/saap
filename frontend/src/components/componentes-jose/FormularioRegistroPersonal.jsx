import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import React from 'react';
import { Formik } from "formik";

export const FormularioRegistroPersonas = () => {

    return(
        <div className='cardRegistroPersonal'>
            <Formik
                initialValues={{
                    celulaIdentidad: '',
                    nombres: '',
                    apellidoPaterno: '',
                    apellidoMaterno: '',
                    telefono: '',
                    correo: '',
                }}

                validate={(valores) => {
                    let errores = {};

                    //validacion Celula de Identidad
                    if(!valores.celulaIdentidad){
                        errores.celulaIdentidad = 'el campo Celula de Intentidad es requerido obligatoriamente';
                    }


                    //validacion para el nombre
                    if(!valores.nombres){
                        errores.nombres = 'el campo nombre es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombres)){
                        errores.nombres = 'el campo no pude tener numeros';
                    }

                    //validacion apellido Paterno
                    if(!valores.apellidoPaterno){
                        errores.apellidoPaterno = 'el campo Apellido Paterno es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidoPaterno)){
                        errores.apellidoPaterno = 'el campo no pude tener numeros';
                    }

                    //validacion apellido Materno
                    if(!valores.apellidoMaterno){
                        errores.apellidoMaterno = 'el campo Apellido Materno es requerido obligatoriamente';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidoMaterno)){
                        errores.apellidoMaterno = 'el campo no pude tener numeros';
                    }

                    //validacion Telefono
                    if(!valores.telefono){
                        errores.telefono = 'el campo Telefono es requerido obligatoriamente';
                    }else if(!/^[0-9\s]{1,10}$/.test(valores.telefono)){
                        errores.telefono = 'el campo no pude tener letras o caracteres especiales';
                    }

                    //validacion correo electronio
                    if(!valores.correo){
                        errores.correo = 'el campo Correlo Electronico es requerido obligatoriamente';
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'el campo solo puede tener letras, numeros, gion y guion bajo';
                    }

                    return errores;
                }}

                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log(valores);
                    console.log('formulario Enviado');
                }}
            >
                {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='celulaIdentidad'>Celula de Identidad</label>
                        <input 
                            type='text'
                            id='celulaIdentidad'
                            name='celulaIdentidad'
                            placeholder='escribe tu numero de carnet'
                            value={values.celulaIdentidad}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.celulaIdentidad && errors.celulaIdentidad && <div className='styleErrores'>{errors.celulaIdentidad}</div>}
                    </div>
                    <div>
                        <label htmlFor='nombres'>nombres</label>
                        <input 
                            type='text'
                            id='nombres'
                            name='nombres'
                            placeholder='escribe tu nombre'
                            value={values.nombres}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.nombres && errors.nombres && <div className='styleErrores'>{errors.nombres}</div>}
                    </div>
                    <div>
                        <label htmlFor='apellidoPaterno'>Apellido Paterno</label>
                        <input 
                            type='text'
                            id='apellidoPaterno'    
                            name='apellidoPaterno'
                            placeholder='escribe tu apellido Paterno'
                            value={values.apellidoPaterno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.apellidoPaterno && errors.apellidoPaterno && <div className='styleErrores'>{errors.apellidoPaterno}</div>}
                    </div>
                    <div>
                        <label htmlFor='apellidoMaterno'>Apellido Materno</label>
                        <input 
                            type='text'
                            id='apellidoMaterno'
                            name='apellidoMaterno'
                            placeholder='escribe tu apellido Materno'
                            value={values.apellidoMaterno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.apellidoMaterno && errors.apellidoMaterno && <div className='styleErrores'>{errors.apellidoMaterno}</div>}
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
                        <label htmlFor='empleado'>Empleado</label>
                        <select 
                            type='text' 
                            id='empleado'
                            name="empleado"
                        >
                            <option value='Guardia'> Guardia </option>
                            <option value='Secretaria'>Secretaria</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='correo'>Correo Electronico</label>
                        <input 
                            type='email'
                            id='correo'
                            name='correo'
                            placeholder='escribe tu Correo Electronio'
                            value={values.correo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.correo && errors.correo && <div className='styleErrores'>{errors.correo}</div>}
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
