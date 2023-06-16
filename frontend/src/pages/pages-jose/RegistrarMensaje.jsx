import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { FormularioRegistroMensaje } from '../../components/componentes-jose/FormularioRegistroMensaje'

function RegistrarMensaje(){
    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal_j">
                <FormularioRegistroMensaje/>
            </div>
        </div>
    </>
}

export default RegistrarMensaje;