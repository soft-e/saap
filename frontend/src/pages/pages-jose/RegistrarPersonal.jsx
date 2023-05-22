import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { FormularioRegistroPersonas } from '../../components/componentes-jose/FormularioRegistroPersonal'

function RegistrarPersonal(){
    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal_j">
                <FormularioRegistroPersonas/>
            </div>
        </div>
    </>
}

export default RegistrarPersonal;