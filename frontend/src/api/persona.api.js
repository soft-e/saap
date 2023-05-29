import axios from "axios";

export const getPersonasRequest = async () =>
  await axios.get("http://127.0.0.1:8000/api/personas");
export const getPersonaRequest = async (id) =>
  await axios.get("http://localhost:8000/api/personas/" + id)
export const createPersonaRequest = async (persona) =>
  await axios.post("http://localhost:8000/api/personas", persona);
export const updatePersonaRequest = async (id, newFields) =>
  await axios.put("http://localhost:8000/api/personas/" + id, newFields);
export const deletePersonaRequest = async (id) =>
  await axios.delete("http://localhost:8000/api/personas/" + id);