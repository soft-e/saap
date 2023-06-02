import { useContext, useState } from "react";
import{
  getPersonasRequest,
  getPersonaRequest,
  createPersonaRequest,
  updatePersonaRequest,
  deletePersonaRequest,
}from "../../api/persona.api";

import { PersonaContext } from "./PersonaContext";

export const usePersonas = ()=>{
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error(
      "usePersonas must be used within a PersonaContextProvider"
    );
  }
  return context;
};

export const PersonaContextProvider= ({children})=>{
  const[personas,setPersonas]=useState([]);

  async function loadPersonas(){
    const response = await getPersonasRequest();
    setPersonas(response.data);
  }

  async function loadPersona(id){
    try {
      const response = await getPersonaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  async function updatePersona(id,newFields){
    try {
      const response = await updatePersonaRequest(id,newFields);
      console.log(response);
    }catch(error){
      console.error(error);
    }
  }
  async function createPersona(persona){
    try {
      const response = await createPersonaRequest(persona);
    } catch (error) {
      console.log(error);
    }
  }
  async function deletePersona(id){
    try {
      const response = await deletePersonaRequest(id);
    } catch (error) {
      
    }
  }
  return (
    <PersonaContext.Provider value={{
      personas,
      loadPersonas,
      loadPersona,
      updatePersona,
      createPersona,
      deletePersona
      }}>
        {children}
      </PersonaContext.Provider>
      )
}