import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ButtonBoxClient from "../components/ButtonBoxClient";
import '../assets/css/css-jose/registrarPersonal.css'
import { useSession } from "../context/context-rodrigo/SessionProvider";
import axios from 'axios';
import ContratosDataPersona from "../components/componentes-jose/ContratosDataPersona";
import AlertaMensaje from "../components/componentes-jose/AlertaMensaje"
import { URL_API } from '../services/EndPoint'
import { useParams } from "react-router-dom";

function ClientHomePage(){
  const { id } = useParams();

  console.log(id)

  return (
      <>
          <Navbar accion="cerrar sesion" />
          <div className="espacioPagina">
              <ButtonBoxClient docente_id={ id }/>
              <div >
                  <div className="contenedorContrato_j">
                      <div>
                          <AlertaMensaje id_docente={ id }/>
                      </div> 
                      <div>
                          <ContratosDataPersona id_docente={ id }/>
                      </div> 
                  </div>
              </div>
          </div>
      </>
  )
};
export default ClientHomePage;