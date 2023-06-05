import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getUsersRequest = async()=>
  await axios.get(URL_API +"/empleados");

  export const deleteUserRequest = async (id) =>
  await axios.delete(URL_API +`/empleados/${id}`);
