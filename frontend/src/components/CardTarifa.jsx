import { useNavigate } from "react-router-dom";
import "../assets/css/css-jhonatan/cardTarifa.css";

function CardTarifa({ tarifa }) {
  const navigate = useNavigate();

  const getMonthName = () => {
    const createdAt = new Date(tarifa.created_at);
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    const monthIndex = createdAt.getMonth();
    return monthNames[monthIndex];
  };

  const isCurrentMonth = () => {
    const currentMonth = new Date().getMonth();
    const tarifaMonth = new Date(tarifa.created_at).getMonth();
    return currentMonth === tarifaMonth;
  };

  const handleEditTarifa = () => {
    if (isCurrentMonth()) {
      navigate("/tarifa/edit/" + tarifa.id);
    } else {
      alert("No puedes editar tarifas de meses pasados");
    }
  };

  return (
    <div className="cardTarifa">
      <header>
        <h2 className="titulo">
          {isCurrentMonth() ? "Tarifa Actual" : `Tarifa ${getMonthName()}`}
        </h2>
      </header>
      <div className="costo">
        <label>Costo Mensual:</label>
        <label className="costomensual">{tarifa.costo_tarifa} Bs.</label>
      </div>
      <div className="seccion_boton">
        <button className="boton_editar" onClick={handleEditTarifa}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default CardTarifa;