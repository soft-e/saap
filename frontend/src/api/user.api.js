import axios from "axios";

export const getUsersRequest = async()=>
  await axios.get("http://127.0.0.1:8000/api/empleados");