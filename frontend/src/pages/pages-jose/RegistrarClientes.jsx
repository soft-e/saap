import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { FormularioRegistroClientes } from '../../components/componentes-jose/FormularioRegistroClientes'

function RegistrarClientes(){
    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal">
            <FormularioRegistroClientes/>
            </div>
        </div>
    </>
}

export default RegistrarClientes;