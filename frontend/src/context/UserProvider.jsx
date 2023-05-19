import { useContext, useState } from "react";

import {
  getUsersRequest,
  getUserRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest
}from "../api/user.api";

import { UserContext } from "./userContext";

export const useUsers =()=>{
  const context = useContext(UserContext);
  if (!context) {
    throw new console.error(
      "useUser puede estar siendo usado sin TaskContextProvider"
    );
  }
  return context
};

export const UserContextProvider = ({children})=>{
  const [users, setUsers]=useState([]);

  async function loadUsers(){
    const response = await getUsersRequest();
    setUsers(response.data);
  };

  const getUser = async(id)=>{
    try {
      const response = await getUserRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  return(
    <UserContext.Provider
      value={{
        users,
        loadUsers,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
