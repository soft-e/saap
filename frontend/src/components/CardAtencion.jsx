import { useNavigate } from "react-router-dom";
import "../assets/css/css-rodrigo/cardAtencion.css"


function CardAtencion({atencion}){
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
        className="boton_editar"
        onClick={()=>navigate("/atencion/edit/"+atencion.id)}
      >
        Editar
      </button>
      </div>
      
      

    </div>
  );
};

export default CardAtencion;
