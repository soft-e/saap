import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";
import '../assets/css/css-jose/registrarPersonal.css'

import { useParams } from "react-router-dom";

import ContratosDataPersona from "../components/componentes-jose/ContratosDataPersona";

function ClientPage() {

    const { id } = useParams();

    return (
        <>
            <Navbar accion="cerrar sesion" />
            <div className="espacioPagina">
                <ButtonBoxClient docente_id={ id }/>
                <div >
                    <div className="contenedorContrato_j">
                        {console.log(id +"  esto es el id")}
                        <ContratosDataPersona id_docente={ id }/> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClientPage;