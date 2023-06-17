import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getTarifasRequest = async () =>
  await axios.get(URL_API + "/tarifa2s");

export const getTarifaRequest = async (id) =>
  await axios.get(URL_API + "/tarifa2s/" + id);

export const createTarifaRequest = async (tarifa) =>
  await axios.post(URL_API + "/tarifa2s", tarifa);

export const updateTarifaRequest = async (id, newFields) =>
  await axios.put(URL_API + "/tarifa2s/" + id, newFields);

export const deleteTarifaRequest = async (id) =>
  await axios.delete(URL_API + "/tarifa2s/" + id);