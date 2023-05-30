import { useNavigate } from "react-router-dom";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import CardListItemCliente from "../../components/components-rodrigo/CardListItemCliente";
import { useDocentes } from "../../context/context-rodrigo/DocenteProvider";
import { useEffect } from "react";
import { usePersonas } from "../../context/context-rodrigo/PersonaProvider";


function ContratoClientePage(){
  const navigate = useNavigate();
  const {docentes,loadDocentes}=useDocentes();
  const {personas,loadPersonas,getPersona}=usePersonas();

  useEffect(()=>{
    loadDocentes();
  },[]);
  //console.log(docentes);
  useEffect(()=>{
    loadPersonas();
  },[]);
  //console.log(personas)
  
  function renderMain(){
    //console.log(docentes)
    if(docentes.length ===0)return <h1>no se tienen docentes registrados</h1>
    return docentes.map((docente)=>{
      const persona = personas.find((persona)=>{
        persona.id===docente.persona_id;
      }
      //<CardListItemCliente persona={persona} key={persona.id}/>
      )
      
      //console.log(persona);
      
      //console.log(docente.persona_id);
      //const persona = getPersona(docente.persona_id);
      //console.log(persona)
    });
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