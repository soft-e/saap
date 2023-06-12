import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getTarifa2sRequest = async () =>
  await axios.get(URL_API + "/tarifa2s");
export const getTarifa2ByIdRequest = async (id) =>
  await axios.get(URL_API + "/tarifa2s/" + id);