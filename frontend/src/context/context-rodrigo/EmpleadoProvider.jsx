import { useContext, useState } from "react";
import { getEmpleadosRequest } from "../../api/empleado.api";

import { EmpleadoContext } from "./EmpleadoContext"

export const useEmpleados = () => {
  const context = useContext(EmpleadoContext);
  if (!context) {
    throw new Error(
      "useEmpleados puede estar siendo usado sin AtencionContextProvider"
    );
  }
  return context;
};

export const EmpleadoContextProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);

  async function loadEmpleados() {
    const response = await getEmpleadosRequest();
    setEmpleados(response.data);
  }
  return (
    <EmpleadoContext.Provider
      value={{
        empleados,
        loadEmpleados
      }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};
