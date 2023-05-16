import axios from "axios";

export const getAtencionesRequest = async()=>
  await axios.get("http://127.0.0.1:8000/api/hatencion");

export const getAtencionRequest = async(id)=>
  await axios.get("http://localhost:8000/api/hatencion/"+id)
export const createAtencionRequest = async(atencion)=>
  await axios.post("http://localhost:8000/api/hatencion",atencion);
export const updateAtencionRequest = async(id,newFields)=>
  await axios.put("http://localhost:8000/api/hatencion/"+id,newFields);
export const deleteAtencionRequest = async(id)=>
  await axios.delete("http://localhost:8000/api/hatencion/"+id);
  