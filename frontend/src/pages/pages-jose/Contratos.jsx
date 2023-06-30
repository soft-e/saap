import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import '../../assets/css/css-jose/formularioRegistroPersonas.css'
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import CardContratos from "../../components/componentes-jose/CardContratos";
import { useNavigate } from "react-router-dom";


function Contratos(){
    const navigate = useNavigate();

    return <>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="contenedorContrato_j">
            <div className="contenedorBotonesVerContratos">
                    <button
                        className="styleButonVerDocentes_j"
                        onClick={()=>navigate('/listarDocentes?estado=false') }
                    > Asignar un sitio
                    </button>
                    <button 
                        className="styleButonVerDocentes_j"
                        onClick={()=>navigate('/listarDocentes?estado=true')}
                    >
                        Solicitudes de Sitio
                    </button>
                </div>
                <div>
                    <CardContratos/>
                </div>
            </div>
        </div>
    </>
}   
export default Contratos;