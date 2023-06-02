import { SessionContext } from "./SessionContext";

import { useContext, useEffect, useState } from "react";

export const useSession =()=>{
  const context = useContext(SessionContext);
  if(!context){
    throw new Error("usePersonas must be used within a SessionProvider");
  }
  return context;
};

export const SessionContextProvider = ({children})=>{
  const [isLoggedIn,setLoggedIn]=useState(false);
  const [user,setUser]=useState(null);

  useEffect(()=>{
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      const {isLoggedIn,user}=JSON.parse(storedSession);
      setLoggedIn(isLoggedIn);
      setUser(user);
    }
  },[]);

  const login = (userData)=>{
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem('session',JSON.stringify({isLoggedIn:true,user:userData}));
  };

  const logout = ()=>{
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('session');
  };

  return(
    <SessionContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

