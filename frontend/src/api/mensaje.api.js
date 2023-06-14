import { URL_API } from "../services/EndPoint";
import axios from "axios";

export const getMensajesRequest = async()=>
  await axios.get(URL_API+"/mensajes");