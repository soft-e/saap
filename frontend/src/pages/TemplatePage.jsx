import ButtonBoxAdmin from "../components/ButtonBoxAdmin";
import "../assets/css/templatePage.css";
import Navbar from "../components/Navbar";


function TemplatePage(){
  return<>
  <Navbar accion="iniciar sesion"/>
  <div className="espacioPagina">
    <ButtonBoxAdmin />
    <div className="espacioDeTrabajo">
    </div>
  </div>
  </> 
}
export default TemplatePage;