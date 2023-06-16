import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";
import '../assets/css/css-jose/registrarPersonal.css'

import { useParams } from "react-router-dom";
import { useSession } from "../context/context-rodrigo/SessionProvider";

import ContratosDataPersona from "../components/componentes-jose/ContratosDataPersona";
import { useEffect } from "react";

function ClientPage() {

    const { id } = useParams();
    const { user } = useSession();

    console.log(user.nombre);

    return (
        <>
            <Navbar accion="cerrar sesion" />
            <div className="espacioPagina">
                <ButtonBoxClient docente_id={ id }/>
                <div >
                    <div className="contenedorContrato_j">
                        <ContratosDataPersona id_docente={ id }/> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClientPage;