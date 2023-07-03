import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getSitiosRequest = async()=>
  await axios.get(URL_API+"/sitio");