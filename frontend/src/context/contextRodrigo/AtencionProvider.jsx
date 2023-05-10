import { useContext, useState } from "react";

import { 
  getAtencionesRequest,
  getAtencionRequest,
  createAtencionRequest,
  updateAtencionRequest,
  deleteAtencionRequest,
} from "../../api/atencion.api";

import { AtencionContext } from "./AtencionContext";

export const useAtencion=()=>{
  const context = useContext(AtencionContext);
  if (!context) {
    throw new console.error(
      "useAtencion puede estar siendo usado sin AtencionContextProvider"
    );
  }
  return context;
};

export const AtencionContextProvider = ({children})=>{
  const [atenciones, setAtenciones]=useState([]);

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
  const createAtencion = async(atencion)=>{
    try{
      const response = await createAtencionRequest(atencion);
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
  const deleteAtencion = async(id)=>{
    try {
      const response = await deleteAtencionRequest(id);
      setAtenciones(atenciones.filter(
        (atencion)=>atencion.id !=id
      ));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return(
    <AtencionContext.Provider
      value={{
        atenciones,
        getAtencion,
        createAtencion,
        loadAtenciones,
        updateAtencion,
        deleteAtencion,
      }}
    >
      {children}
    </AtencionContext.Provider>
  );
};
