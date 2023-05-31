import { useNavigate } from "react-router-dom";
import "../assets/css/css-jhonatan/cardTarifa.css";

function CardTarifa({ tarifa }) {
  const navigate = useNavigate();

  return (
    <div className="cardTarifa">
      <header>
        <h2 className="titulo">
          Tarifa
        </h2>
      </header>
      <div className="costo">
        <label>
          Costo Mensual:
        </label>
        <label className="costomensual">
          {tarifa.costo_tarifa} Bs.
        </label>
      </div>
      <div className="seccion_boton">
        <button
          className="boton_editar"
          onClick={() => navigate("/tarifa/edit/" + tarifa.id)}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

export default CardTarifa;