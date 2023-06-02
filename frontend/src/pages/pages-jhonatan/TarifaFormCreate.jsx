import React from "react";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import { Formik } from "formik";
import { useTarifas } from "../../context/context-jhonatan/TarifaProvider";
import { useNavigate } from "react-router-dom";
import "../../assets/css/css-jhonatan/tarifaForm.css";

function TarifaFormCreate() {
  const { createTarifa } = useTarifas();
  const navigate = useNavigate();

  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="formularioTarifa">
            <Formik
              initialValues={{
                costo_tarifa: ""
              }}
              onSubmit={async (values, actions) => {
                await createTarifa(values);
                navigate("/tarifa");
                actions.resetForm();
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <form className="espacioFormTarifa" onSubmit={handleSubmit}>
                  <h1 className="h1Tarifa">Crear Tarifa</h1>
                  <div className="contenedorInputs">
                    <h2 className="h2Tarifa">Costo de la tarifa</h2>
                    <input
                      className="inputTarifa"
                      type="text"
                      name="costo_tarifa"
                      placeholder="Introduce el costo de la tarifa"
                      onChange={handleChange}
                      value={values.costo_tarifa}
                    />
                  </div>

                  <div className="espacioBotonesTarifa">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creando" : "Crear"}
                    </button>

                    <button onClick={() => navigate("/tarifa")}>
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarifaFormCreate;