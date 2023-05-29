import { useContext,useState } from "react";
import { 
  getPersonasRequest,
  getPersonaRequest,
  updatePersonaRequest,
  createPersonaRequest,
  deletePersonaRequest
} from "../../api/persona.api";

import { PersonaContext } from "./PersonaContext";

export const usePersonas = ()=>{
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error(
      "usePersonas puede estar siendo usado sin PersonaContextProvider"
    );
  }
  return context;
};

export const PersonaContextProvider=({children})=>{
  const [personas,setPersonas]=useState([]);

  async function loadPersonas(){
    const response = await getPersonasRequest();
    setPersonas(response.data);
  }

  const getPersona = async(id)=>{
    try {
      const response = await getPersonaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return(
    <PersonaContext.Provider
      value={{
        personas,
        loadPersonas,
        getPersona,
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
};