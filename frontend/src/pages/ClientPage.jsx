import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";
import '../assets/css/css-jose/registrarPersonal.css'
import { useSession } from "../context/context-rodrigo/SessionProvider";
import axios from 'axios';
import ContratosDataPersona from "../components/componentes-jose/ContratosDataPersona";
import AlertaMensaje from "../components/componentes-jose/AlertaMensaje"
import { URL_API } from '../services/EndPoint'

const endPoint = URL_API+'/docentes';

function ClientPage() {

    const [docentes, setDocente] = useState( [] )
    const { user } = useSession();

    useEffect ( () => {
        getAllDocentes();
    }, []);

    const getAllDocentes = async () => {
        const response = await axios.get(endPoint);
        setDocente(response.data);
    }

    function obtenerIdDocente(buscar){
        let res;
        for(let i = 0; i < docentes.length; i++){
            {console.log("estamos comparando: "+buscar+" con: "+docentes[i].persona_id)}
            if(docentes[i].persona_id == buscar){
                res = docentes[i].id;
            }
        }
        return res;
    }

    return (
        <>
            <Navbar accion="cerrar sesion" />
            <div className="espacioPagina">
                <ButtonBoxClient docente_id={ obtenerIdDocente(user.id) }/>
                <div >
                    <div className="contenedorContrato_j">
                        <div>
                            <ContratosDataPersona id_docente={ obtenerIdDocente(user.id) }/>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClientPage;