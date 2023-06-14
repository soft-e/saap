import "../../assets/css/css-jhonatan/tarifapage.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useTarifas } from "../../context/context-jhonatan/TarifaProvider";
import CardTarifa from "../../components/CardTarifa";

function TarifaPage() {
  const { tarifas, loadTarifas } = useTarifas();
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    loadTarifas();
  }, []);

  function renderMain() {
    if (tarifas.length === 0) return <h1>No se tiene tarifas registradas</h1>;
    return tarifas.map((tarifa) => (
      <CardTarifa tarifa={tarifa} key={tarifa.id} />
    ));
  }

  function handleRegistrarTarifaClick() {
    const alreadyCreated = tarifas.some(
      (tarifa) => new Date(tarifa.created_at).getMonth() + 1 === currentMonth
    );

    if (alreadyCreated) {
      alert("Ya se ha creado una tarifa este mes.");
    } else {
      navigate("/tarifa/create", { state: { currentMonth } });
    }
  }

  return (
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
        <div className="tituloTarifa"> 
          <h1>Tarifa</h1>
          <div className="registrarTarifaButtonContainer">
            <button className="botonTarifa hvr-fade" onClick={handleRegistrarTarifaClick}>
              Registrar Tarifa
            </button>
            </div> 
          </div>
          <div className="cardsTarifa">{renderMain()}</div>
        </div>
      </div>
    </>
  );
}

export default TarifaPage;
