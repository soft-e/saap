import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";
import '../assets/css/css-jose/registrarPersonal.css'

import { useParams } from "react-router-dom";
import { useSession } from "../context/context-rodrigo/SessionProvider";

import ContratosDataPersona from "../components/componentes-jose/ContratosDataPersona";
import AlertaMensaje from "../components/componentes-jose/AlertaMensaje"

function ClientPage() {

    const { id } = useParams();
    const { user } = useSession();

    //console.log(user.nombre);

    return (
        <>
            <Navbar accion="cerrar sesion" />
            <div className="espacioPagina">
                <ButtonBoxClient docente_id={ id }/>
                <div >
                    <div className="contenedorContrato_j">
                        <div>
                            <AlertaMensaje id_docente={ id }/>
                        </div> 
                        <div>
                            <ContratosDataPersona id_docente={ id }/>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClientPage;