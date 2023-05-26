import { useNavigate } from "react-router-dom";
import "../assets/css/css-rodrigo/cardAtencion.css"
import { useAtenciones } from "../context/context-rodrigo/AtencionProvider";

function CardAtencion({atencion}){
  const{deleteAtencion}=useAtenciones();
  const navigate = useNavigate();
  return(
    <div
      className="cardAtencion"
    >
      <header>
        <h2
          className="titulo"
        >
          {atencion.tipo_atencion}
        </h2>
      </header>
      <div
        className="hora"
      >
        <label>
          Hora apertura:
        </label>
        <label
          className="hora_apertura"
        >
        {atencion.hora_apertura}
        </label>
      </div>
      <div
        className="hora"
      >
        <label>
          Hora cierre:
        </label>
        <label
          className="hora_cierre"
        >
        {atencion.hora_cierre}
        </label>
      </div>
      <div
        className="seccion_boton"
      >
      <button
        className="botonEditarAtencion"
        onClick={()=>navigate("/atencion/edit/"+atencion.id)}
      >
        Editar
      </button>
      <button
        className="botonBorrarAtencion"
        onClick={()=>deleteAtencion(atencion.id)}
      >
        Borrar
      </button>
      </div>
      
      

    </div>
  );
};

export default CardAtencion;
