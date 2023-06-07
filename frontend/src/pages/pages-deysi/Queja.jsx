

import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import "../../assets/css/css-deysi/formularioResponderQueja.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { FormularioResponderQueja } from '../../components/componentes-jose/Formulario RegistroMensaje'

function Queja(){
    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal_j">
                <FormularioResponderQueja/>
            </div>
        </div>
    </>
}
export default Queja;