import { useContext,useState } from "react";
import { 
  getAtencionesRequest,
  getAtencionRequest,
  updateAtencionRequest  
}from "../../api/atencion.api";

import { AtencionContext } from "./AtencionContext";

export const useAtenciones =()=>{
  const context = useContext(AtencionContext);
  if(!context){
    throw new Error(
      "useAtenciones puede estar siendo usado sin AtencionContextProvider"
    );
  }
  return context;
};

export const AtencionContextProvider = ({children})=>{
  const [atenciones,setAtenciones ] = useState([]);

  async function loadAtenciones(){
    const response = await getAtencionesRequest();
    setAtenciones(response.data);
  }

  const getAtencion = async(id)=>{
    try{
      const response = await getAtencionRequest(id);
      return response.data;
    }catch(error){
      console.error(error);
    }
  };
  const updateAtencion = async(id,newFields)=>{
    try {
      const response = await updateAtencionRequest(id,newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <AtencionContext.Provider
      value={{
        atenciones,
        loadAtenciones,
        getAtencion,
        updateAtencion
      }}
    >
      {children}
    </AtencionContext.Provider>
  );
};