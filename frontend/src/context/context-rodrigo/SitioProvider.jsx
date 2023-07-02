import { useContext, useState } from "react";
import { getSitiosRequest } from "../../api/sitios.api";
import { SitioContext } from "./SitioContext";

export const useSitios=()=>{
  const context = useContext(SitioContext);
  if(!context){
    throw new Error("useSites must be used within a SiteProvider");
  }
  return context;
}
export const SitioContextProvider=({children})=>{
  const [sitios, setSitios]=useState([]);

  async function loadSitios(){
    const response = await getSitiosRequest();
    setSitios(response.data);
  }
  return (
    <SitioContext.Provider 
    value={{
      sitios,
      loadSitios,
    }}>
      { children }
    </SitioContext.Provider>
  )
}