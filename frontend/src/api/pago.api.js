import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getPagosRequest = async () =>
  await axios.get(URL_API + "/pagos");

export const getPagoRequest = async (id) =>
  await axios.get(URL_API + "/pagos/" + id);