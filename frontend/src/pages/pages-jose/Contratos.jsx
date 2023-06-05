import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import CardContratos from "../../components/componentes-jose/CardContratos";
import { useNavigate } from "react-router-dom";


function Contratos(){
    const navigate = useNavigate();

    function handleClik(){
        navigate('/listarDocentes');
    }

    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="contenedorContrato_j">
                <div className="contenedorContraroArriba_j">
                    <h1>Contratos</h1>
                    <button
                        className="styleButonVerDocentes_j"
                        onClick={ handleClik }
                    > Ver Docentes</button>
                </div>
                <div>
                    <CardContratos/>
                </div>
            </div>
        </div>
    </>
}   
export default Contratos;