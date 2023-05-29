import axios from "axios";

export const getDocentesRequest = async () =>
  await axios.get("http://127.0.0.1:8000/api/docentes");
export const getDocenteRequest = async (id) =>
  await axios.get("http://localhost:8000/api/docentes/" + id)
export const createDocenteRequest = async (docente) =>
  await axios.post("http://localhost:8000/api/docentes", docente);
export const updateDocenteRequest = async (id, newFields) =>
  await axios.put("http://localhost:8000/api/docentes/" + id, newFields);
export const deleteDocenteRequest = async (id) =>
  await axios.delete("http://localhost:8000/api/docentes/" + id);