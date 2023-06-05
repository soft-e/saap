import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getAtencionesRequest = async () =>
  await axios.get(URL_API+"/atencion");
export const getAtencionRequest = async (id) =>
  await axios.get(URL_API+"/atencion/" + id)
export const createAtencionRequest = async (atencion) =>
  await axios.post(URL_API+"/atencion", atencion);
export const updateAtencionRequest = async (id, newFields) =>
  await axios.put(URL_API+"/atencion/" + id, newFields);
export const deleteAtencionRequest = async (id) =>
  await axios.delete(URL_API+"/atencion/" + id);