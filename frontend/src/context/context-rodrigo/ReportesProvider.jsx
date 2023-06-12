import { useContext } from "react";
import {
  getPagosRequest
}from "../../api/pago.api";
import {
  getTarifa2sRequest
}from "../../api/tarifa2.api";

import { ReporteContext } from "./ReportesContext";

export const useReportes = ()=>{
  const context = useContext(ReporteContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within a AuthProvider"
    );
  }
  return context;
};

