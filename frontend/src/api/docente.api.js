import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getDocentesRequest = async () =>
  await axios.get(URL_API + "/docentes");

export const getDocenteRequest = async (id) =>
  await axios.get(URL_API + "/docentes/" + id);