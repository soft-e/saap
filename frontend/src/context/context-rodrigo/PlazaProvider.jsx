import { useContext, useState } from "react";
import {
  getPlazasRequest,
  getPlazaRequest
} from "../../api/plaza.api";

import { PlazaContext } from "./PlazaContext";

export const usePlazas = () => {
  const context = useContext(PlazaContext);
  if (!context) {
    throw new Error(
      "usePlazas must be used within a PlazaContextProvider"
    );
  };
  return context;
};

export const PlazaContextProvider = ({ children }) => {
  const [plazas, setPlazas] = useState([]);

  async function loadPlazas() {
    const response = await getPlazasRequest();
    setPlazas(response.data);
  };

  async function getPlaza(id){
    try {
      const response = await getPlazaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlazaContext.Provider value={{
      plazas,
      loadPlazas,
      getPlaza
    }}>
      {children}
    </PlazaContext.Provider>
  )
};