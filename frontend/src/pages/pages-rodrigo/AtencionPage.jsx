import "../../assets/css/css-rodrigo/atencionPage.css"
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import { useAtenciones } from "../../context/context-rodrigo/AtencionProvider";
import { useEffect} from "react";
import CardAtencion from "../../components/CardAtencion";


function AtencionPage(){
  const{atenciones,loadAtenciones}=useAtenciones();
  useEffect(()=>{
    loadAtenciones();
  },[]);

  function renderMain(){
    if(atenciones.length ===0)return<h1>no se tiene horarios de atencion registrado</h1>
    return atenciones.map((atencion)=><CardAtencion atencion={atencion} key={atencion.id}/>);
  }

  return <>
    <Navbar accion="iniciar sesion" />
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacioDeTrabajo"
      >
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