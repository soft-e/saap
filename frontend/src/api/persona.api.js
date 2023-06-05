import axios from "axios";
import {URL_API} from "../services/EndPoint";

export const getPersonasRequest = async()=>
  await axios.get(URL_API+"/personas");

export const getPersonaRequest = async(id)=>
  await axios.get(URL_API+"/personas/"+id);

export const createPersonaRequest = async(persona)=>
  await axios.post(URL_API+"/personas",persona);

export const updatePersonaRequest = async(id,newFields)=>
  await axios.put(URL_API+"/personas/"+id,newFields);

export const deletePersonaRequest = async(id)=>
  await axios.delete(URL_API+"/personas/"+id);