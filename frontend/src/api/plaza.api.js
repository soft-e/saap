import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getPlazasRequest = async()=>
  await axios.get(URL_API+"/plazas");