import { useContext, useState } from "react";

import {
  getUsersRequest
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
  
  return(
    <UserContext.Provider
      value={{
        users,
        loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
