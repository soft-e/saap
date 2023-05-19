import axios from "axios";

export const getUsersRequest = async()=>
  await axios.get("http://127.0.0.1:8000/api/personas");
export const getUserRequest = async(id)=>
  await axios.get("http://127.0.0.1:8000/api/personas/"+id);
export const createUserRequest = async(user)=>
  await axios.post("http://127.0.0.1:8000/api/personas",user);
export const updateUserRequest = async(id,newFields)=>
  await axios.put("http://127.0.0.1:8000/api/personas/"+id,newFields);
export const deleteUserRequest = async(id)=>
  await axios.delete("http://127.0.0.1:8000/api/personas/"+id);
