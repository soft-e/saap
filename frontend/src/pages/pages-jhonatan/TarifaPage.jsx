import "../../assets/css/css-jhonatan/tarifapage.css"
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useTarifas } from "../../context/context-jhonatan/TarifaProvider";
import CardTarifa from "../../components/CardTarifa";

function TarifaPage() {
  const { tarifas, loadTarifas } = useTarifas();
  const navigate = useNavigate();

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
    navigate("/tarifa/create");
  }

  return (
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <h1 className="title">Tarifa</h1>
          <div className="registrarTarifaButtonContainer">
            <button className="button" onClick={handleRegistrarTarifaClick}>
              Registrar Tarifa
            </button>
          </div>
          <div className="cardsTarifa">{renderMain()}</div>
        </div>
      </div>
    </>
  );
}

export default TarifaPage;

