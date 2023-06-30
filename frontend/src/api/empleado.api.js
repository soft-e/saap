import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getEmpleadosRequest = async () =>
  await axios.get(URL_API + "/empleados")