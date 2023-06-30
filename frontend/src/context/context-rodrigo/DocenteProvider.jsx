import { useContext, useState } from "react";
import {
  getDocentesRequest,
  getDocenteRequest,
} from "../../api/docente.api";
import { DocenteContext } from "./DocenteContext";


export const useDocentes = () => {
  const context = useContext(DocenteContext);
  if (!context) {
    throw new Error(
      "useDocentes must be used within a DocenteContextProvider"
    );
  }
  return context;
};

export const DocenteContextProvider = ({ children }) => {
  const [docentes, setDocentes] = useState([]);

  async function loadDocentes() {
    const response = await getDocentesRequest();
    setDocentes(response.data);
  }
  const getDocente = async (id) => {
    try {
      const response = await getDocenteRequest(id);
      //console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <DocenteContext.Provider value={{
      docentes,
      loadDocentes,
      getDocente
    }}>
      {children}
    </DocenteContext.Provider>
  )
}