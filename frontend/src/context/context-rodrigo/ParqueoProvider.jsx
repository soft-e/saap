import { useContext, useState } from "react";
import {
  getParqueosRequest
} from "../../api/parqueo.api";

import { ParqueoContext } from "./ParqueoContext";

export const useParqueos = () => {
  const context = useContext(ParqueoContext);
  if (!context) {
    throw Error(
      "useParqueos must be used within a ParqueoscontextProvider"
    );
  };
  return context;
};

export const ParqueocontextProvider = ({ children }) => {
  const [parqueos, setParqueos] = useState([]);

  async function loadParqueos() {
    const response = await getParqueosRequest();
    setParqueos(response.data);
  };

  return (
    <ParqueoContext.Provider value={{
      parqueos,
      loadParqueos,
    }}>
      {children}
    </ParqueoContext.Provider>
  )
}