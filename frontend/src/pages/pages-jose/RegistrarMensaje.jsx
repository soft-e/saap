import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { FormularioRegistroMensaje } from '../../components/componentes-jose/FormularioRegistroMensaje'
import { useNavigate } from "react-router-dom";

function RegistrarMensaje() {
    const navigate = useNavigate();
    return <>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="espacioDeTrabajo">
                <p
                    className="botonAtras"
                    onClick={() => navigate("/vermensajes")}
                >IR ATRAS</p>
                <h1
                    className="tituloAtencion"
                >Redactar un nuevo mensaje</h1>
                <p
                    className="informativo"
                >Tipo destinatario te permite elegir entre enviar un mensaje a todos los usuarios o uno en especifico por su correo</p>
                <div

                    className="formularioNuevoMensaje"
                >

                    <FormularioRegistroMensaje />
                </div>

            </div>
        </div>
    </>
}

export default RegistrarMensaje;