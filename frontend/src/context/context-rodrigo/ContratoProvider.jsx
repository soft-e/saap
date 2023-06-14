import { useContext, useState } from "react"
import {getContratosRequest}from "../../api/contrato.api"
import { ContratoContext } from "./ContratoContext"

export const useContratos = ()=>{
  const context = useContext(ContratoContext);
  if (!context) {
    throw new Error(
      "useContratos must be used within a ContratoContextProvider"
    );
  }
  return context;
}

export const ContratoContextProvider = ({children})=>{
  const[contratos,setContratos]=useState([]);

  async function loadContratos(){
    const response = await getContratosRequest();
    setContratos(response.data);
  }
  return(
    <ContratoContext.Provider value={{
      contratos,
      loadContratos
    }}>
      {children}
    </ContratoContext.Provider>
  )
}