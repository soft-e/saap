import axios from "axios";

export const getTarifasRequest = async () =>
  await axios.get("http://127.0.0.1:8000/api/ctarifa");

export const getTarifaRequest = async (id) =>
  await axios.get("http://localhost:8000/api/ctarifa/" + id);

export const createTarifaRequest = async (tarifa) =>
  await axios.post("http://localhost:8000/api/ctarifa", tarifa);

export const updateTarifaRequest = async (id, newFields) =>
  await axios.put("http://localhost:8000/api/ctarifa/" + id, newFields);

export const deleteTarifaRequest = async (id) =>
  await axios.delete("http://localhost:8000/api/ctarifa/" + id);