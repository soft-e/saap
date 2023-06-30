import entradaParqueo from "../../assets/images/entradaDelParqueo.png"
import Navbar from "../../components/Navbar";
import "../../assets/css/ubicacion.css"
import { useNavigate} from "react-router-dom";


function UbicacionPage(){
  
  const navigate =useNavigate();
  const goback=()=>{
    window.history.back();
  }
  return<>
    <Navbar accion="iniciar sesion"/>
    <div
      className="espacioPagina"
    >
      <p
    className="botonAtras"
    onClick={()=>goback()}
  >IR ATRAS</p>
      <div
      className="espacioDeTrabajoCompleto"
      >
        <img 
          className="entradaParqueo"
        src={entradaParqueo} alt="" />
      </div>
    </div>
  </>
}
export default UbicacionPage;