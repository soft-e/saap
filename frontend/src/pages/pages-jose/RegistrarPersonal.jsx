import "../../assets/css/templatePage.css";
import "../../assets/css/css-jose/registrarPersonal.css"
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { FormularioRegistroPersonas } from '../../components/componentes-jose/FormularioRegistroPersonal'
import { useNavigate } from "react-router-dom";

function RegistrarPersonal(){
    const navigate = useNavigate();
    return <>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="espacioDeTrabajo">
            <p
    className="botonAtras"
    onClick={()=>navigate("/personal")}
  >IR ATRAS</p>
                <h1
                    className="tituloAtencion"
                >Registro De Nuevo Personal</h1>
                <p
                    className="informativo"
                >
                    Formulario de Registro de un nuevo empleado
                </p>
                <div
                    className="espacioFormularioRegistroPersonas"
                >
                    <FormularioRegistroPersonas/>
                </div>
                
            </div>
        </div>
    </>
}

export default RegistrarPersonal;