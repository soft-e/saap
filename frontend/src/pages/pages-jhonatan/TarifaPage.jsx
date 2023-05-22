import "../../assets/css/css-jhonatan/tarifapage.css"
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { useTarifas } from "../../context/context-jhonatan/TarifaProvider";
import CardTarifa from "../../components/CardTarifa";

function TarifaPage() {
  const { tarifas, loadTarifas } = useTarifas();

  useEffect(() => {
    loadTarifas();
  }, []);

  function renderMain() {
    if (tarifas.length === 0) return <h1>No se tiene tarifas registradas</h1>;
    return tarifas.map((tarifa) => <CardTarifa tarifa={tarifa} key={tarifa.id} />);
  }

  return (
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="cardsTarifa">
            {renderMain()}
          </div>
        </div>
      </div>
    </>
  );
}

export default TarifaPage;