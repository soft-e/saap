import { useContext, useState } from "react";
import {
  getPagosRequest
} from "../../api/pago.api";

import { PagoContext } from "./PagoContext";

export const usePagos = () => {
  const context = useContext(PagoContext);
  if (!context) {
    throw Error(
      "usePagos debe ser usado con un PagoContextProvider"
    );
  };
  return context;
};

export const PagoContextProvider = ({ children }) => {
  const [pagos, setPagos] = useState([]);

  async function loadPagos() {
    const response = await getPagosRequest();
    setPagos(response.data);
  };
  return (
    <PagoContext.Provider value={{
      pagos,
      loadPagos
    }}>
      {children}
    </PagoContext.Provider>
  );
};