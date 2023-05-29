import React, { useContext, useState } from "react";
import {
  getTarifasRequest,
  getTarifaRequest,
  updateTarifaRequest,
  createTarifaRequest // Importa la función para crear tarifas
} from "../../api/tarifa.api";

import { TarifaContext } from "./TarifaContext";

export const useTarifas = () => {
  const context = useContext(TarifaContext);
  if (!context) {
    throw new Error(
      "useTarifas se está utilizando sin el TarifaContextProvider"
    );
  }
  return context;
};

export const TarifaContextProvider = ({ children }) => {
  const [tarifas, setTarifas] = useState([]);

  async function loadTarifas() {
    const response = await getTarifasRequest();
    setTarifas(response.data);
  }

  const getTarifa = async (id) => {
    try {
      const response = await getTarifaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTarifa = async (id, newFields) => {
    try {
      const response = await updateTarifaRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createTarifa = async (newTarifa) => {
    try {
      const response = await createTarifaRequest(newTarifa);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TarifaContext.Provider
      value={{
        tarifas,
        loadTarifas,
        getTarifa,
        updateTarifa,
        createTarifa
      }}
    >
      {children}
    </TarifaContext.Provider>
  );
};