import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getContratosRequest = async()=>
  await axios.get(URL_API+"/contrato")