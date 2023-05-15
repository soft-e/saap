import "../../assets/css/templatePage.css";
import { Navbar } from "../../components/Navbar";
import { ButtonBoxAdmin } from "../../components/ButtonBoxAdmin";
import { FormularioRegistroPersonas } from '../../components/componentes-jose/FormularioRegistroPersonal'

function RegistrarPersonal(){
    return <>
        <Navbar accion="cerrar cesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <FormularioRegistroPersonas/>
        </div>
        <h1>hola</h1>
    </>
}
export default RegistrarPersonal();