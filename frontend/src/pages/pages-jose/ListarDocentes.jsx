import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import '../../assets/css/css-jose/registrarPersonal.css'
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import CardDocentes from '../../components/componentes-jose/CardDocentes'

function ListarDocentes(){

    return <>
        <Navbar accion="iniciar sesion"/>
        <div className="espacioPagina">
            <ButtonBoxAdmin />
            <div className="registrarPersonal_j">
                <CardDocentes/>
            </div>
        </div>
    </>
}
export default ListarDocentes;