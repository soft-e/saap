import "../../assets/css/css-rodrigo/atencionPage.css"
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import { useAtenciones } from "../../context/context-rodrigo/AtencionProvider";
import { useEffect} from "react";
import CardAtencion from "../../components/CardAtencion";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


function AtencionPage(){
  const{atenciones,loadAtenciones,createAtencion}=useAtenciones();
  useEffect(()=>{
    loadAtenciones();
  },[]);

  const navigate = useNavigate();
  function renderMain(){
    if(atenciones.length ===0)return<h1>no se tiene horarios de atencion registrado</h1>
    return atenciones.map((atencion)=><CardAtencion atencion={atencion} key={atencion.id}/>);
  }

  return <>
    <Navbar accion="cerrar sesion" />
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacioDeTrabajo"
      >
        <div
            className="tituloAtencion"
          >
            <h1>Horario de Atencion</h1>
            <button
              onClick={()=>navigate("/atencion/new")}
              className="botonAtencion hvr-fade"

            >Registrar Horario de Atencion</button>
          </div>
          <div
            className="cardsAtencion"
          >
            {renderMain()}
        </div>
      </div>
    </div>
  </>
}
export default AtencionPage;