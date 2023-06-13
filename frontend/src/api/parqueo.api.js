import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getParqueosRequest = async()=>
  await axios.get(URL_API+"/parqueos");
