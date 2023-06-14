import { useContext, useState } from "react";
import { getMensajesRequest } from "../../api/mensaje.api";
import { MensajeContext} from "./MensajeContext";

export const useMensajes=()=>{
  const context = useContext(MensajeContext);
  if (!context) {
    throw new Error(
      `useMessages must be used within a MessagesProvider`
    );
  };
  return context;
};

export const MensajeContextProvider = ({children})=>{
  const [mensajes, setMensajes]=useState([]);

  async function loadMensajes(){
    const response = await getMensajesRequest();
    setMensajes(response.data);
  }
  return(
    <MensajeContext.Provider
    value={{mensajes,
      loadMensajes
    }}
    >{children}
    </MensajeContext.Provider>
  );
};