import { useNavigate } from "react-router-dom";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import CardListItemCliente from "../../components/components-rodrigo/CardListItemCliente";
import { useDocentes } from "../../context/context-rodrigo/DocenteProvider";
import { useEffect } from "react";


function ContratoClientePage(){
  const navigate = useNavigate();
  const {docentes,loadDocentes}=useDocentes();

  useEffect(()=>{
    loadDocentes();
  },[]);
  
  function renderMain(){
    console.log(docentes)
    if(docentes.length ===0)return <h1>no se tienen docentes registrados</h1>
    return docentes.map((docente)=><CardListItemCliente docente={docente} key={docente.id}/>);
  }
  return<>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacioDeTrabajo"
      >
        <div
          className="tituloCliente"
        >
          <h1>Elegir Cliente</h1>
        </div>
        <div
          className="espacioCards"
        >
          <CardListItemCliente/>
          {renderMain()}
        </div>
      </div>
    </div>
  </>
}
export default ContratoClientePage;