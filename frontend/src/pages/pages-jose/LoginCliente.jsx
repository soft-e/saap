import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { URL_API } from "../../services/EndPoint";

const endPointDocentes = URL_API+'/docentes';
const endPointContrato = URL_API+'/contrato';

function LoginCliente(){
    const navigate = useNavigate();
    const [contratos, setContratos] = useState ( [] );
    const [docentes, setDocentes] = useState( [] );
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect ( () => {
        getAllDocentes();
        getAllContratos();
    }, []);

    const getAllDocentes = async () => {
        const response = await axios.get(endPointDocentes);
        setDocentes(response.data);
    }

    const getAllContratos = async () => {
        const response = await axios.get(endPointContrato);
        setContratos(response.data);
    }

    function messagesError(){
        return ("sin error");
    }

    function iniciarSecion(){
        let existe = false;
        let id;
        for(let i = 0; i<docentes.length; i++){
            if(email === docentes[i].persona.email){
                if(password === docentes[i].persona.password){
                    existe = true;
                    id=docentes[i].id;
                    break;
                }
            }
        }
        if(existe){
            console.log('USUARIO SI EXISTE')
            navigate('/client/'+id);
        }else{
            console.log("ERROR DE USUARIO")
        }
    }

    function handleClick (){
        navigate('/')
    }

    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <div className='cardLogin_j'>
                <div className='cardRegistroPersonal_j'>
                    <div>
                        <h2> Iniciar Secion Cliente </h2>
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
                            <button  className='stylesButton_j' onClick={ iniciarSecion }>
                                Guardar
                            </button>
                        </div>
                        <div className="espacioBoton_j">
                            <button className='stylesButton_j' onClick={ handleClick }>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}   
export default LoginCliente;