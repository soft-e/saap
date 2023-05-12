import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/css-jhonatan/cardTarifa.css";

function CardTarifa() {
  const [costo, setCosto] = useState("");

  useEffect(() => {
    const fetchTarifa = async () => {
      const response = await axios.get("http://localhost:8000/api/tarifa");
      setCosto(response.data.costo_tarifa);
    };

    fetchTarifa();
  }, []);

  return (
    <div className="card-tarifa">
      <h2 className="card-tarifa-title">Costo Mensual</h2>
      <div className="card-tarifa-body">
        <p className="card-tarifa-costo">{costo} Bs.</p>
      </div>
      <button className="card-tarifa-btn">Editar</button>
    </div>
  );
}

export default CardTarifa;