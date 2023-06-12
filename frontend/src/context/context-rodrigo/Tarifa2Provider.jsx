import { useContext, useState } from "react";
import{
  getTarifa2sRequest,
  getTarifa2ByIdRequest
}from "../../api/tarifa2.api";
import { Tarifa2Context } from "./Tarifa2Context";

export const useTarifa2 = ()=>{
  const context = useContext(Tarifa2Context);
  if (!context) {
    throw new Error(
      "useTarifa2 debe ser usado con un Tarifa2ContextProvider"
    );
  };
  return context;
};

export const Tarifa2ContextProvider = ({children})=>{
  const [tarifa2s,setTarifa2s]=useState([]);

  async function loadTarifa2s(){
    const response = await getTarifa2sRequest();
    setTarifa2s(response.data);
  };
  async function getTarifa2(id){
    try {
      const response = await getTarifa2ByIdRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return(
    <Tarifa2Context.Provider value={{
      tarifa2s,
      loadTarifa2s,
      getTarifa2,
    }}>
      {children}
    </Tarifa2Context.Provider>
  )
};
