import { useContext,useState } from "react";
import { 
  getDocentesRequest,
  getDocenteRequest,
  updateDocenteRequest,
  createDocenteRequest,
  deleteDocenteRequest
} from "../../api/docente.api";

import { DocenteContext } from "./DocenteContext";

export const useDocentes = ()=>{
  const context = useContext(DocenteContext);
  if (!context) {
    throw new Error(
      "useDocentes puede estar siendo usado sin atencionContextProvider"
    );
  }
  return context;
};

export const DocenteContextProvider = ({children})=>{
  const[docentes,setDocentes]=useState([]);

  async function loadDocentes(){
    const response = await getDocentesRequest();
    setDocentes(response.data);
  }

  const getDocente = async(id)=>{
    try {
      const response = await getDocenteRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const updateDocente=async(id,newFields)=>{
    try {
      const response = await updateDocenteRequest(id,newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return(
    <DocenteContext.Provider
      value={{
        docentes,
        loadDocentes,
        getDocente,
      }}
    >
      {children}
    </DocenteContext.Provider>
  );
};