import { useContext, useState } from "react";
import { getVehiculosRequest,
  getVehiculoRequest,
} from "../../api/vehiculo.api";
import { VehiculoContext } from "./VehiculoContext";

export const useVehiculos=()=>{
  const context = useContext(VehiculoContext);
  if(!context){
    throw new Error(
      "usePersonas must be used within a VehiculoContextProvider"
    );
  }
  return context;
};

export const VehiculoContextProvider = ({children})=>{
  const [vehiculos,setVehiculos]=useState([]);

  async function loadVehiculos(){
    const response = await getVehiculosRequest();
    setVehiculos(response.data);
  }

  async function getVehiculo(id){
    try {
      const response = await getVehiculoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <VehiculoContext.Provider value={{
      vehiculos,
      loadVehiculos,
      getVehiculo
    }}>
      { children }
    </VehiculoContext.Provider>
  )
}