import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import CardDocentes from '../../components/componentes-jose/CardDocentes'
import { useNavigate } from "react-router-dom";
function ListarDocentes(){
    const navigate = useNavigate();
    return <>
        <Navbar accion="cerrar sesion" />
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <p
    className="botonAtras"
    onClick={()=>navigate("/contratos")}
  >IR ATRAS</p>
            <div className="registrarPersonal_j">
            
                <CardDocentes/>
            </div>
        </div>
    </>
}
export default ListarDocentes;