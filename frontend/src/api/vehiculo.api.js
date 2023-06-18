import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getVehiculosRequest = async () =>
  await axios.get(URL_API + "/vehiculos");

export const getVehiculoRequest = async (id) => {
  await axios.get(URL_API + "/vehiculos/" + id);
}