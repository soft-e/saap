/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

import axios from "axios";

import "../../assets/css/templatePage.css";
import "../../assets/css/css-deysi/parqueo.css";
import Navbar from "../../components/Navbar";
import PlazasOcupadas from "./PlazasOcupadas";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import PlazasDisponibles from "./PlazasDisponibles";
import {URL_API} from '../../services/EndPoint'

import { useNavigate } from "react-router-dom";

//const endPoint = "http://localhost:8000/api";

const Parqueo = () => {
  const [plazas, setPlazas] = useState([]);
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetchPlazas();
  }, []);

  const fetchPlazas = () => {
    axios.get(`${URL_API}/plazas`).then((response) => {
      setPlazas(response.data);
    });
  };

  const handleClick = (id) => {
    const updatedPlazas = plazas.map((plaza) => {
      if (plaza.id === id) {
        plaza.estado = plaza.estado === "libre" ? "ocupado" : "libre";
      }
      return plaza;
    });
    setPlazas(updatedPlazas);
  };

  const handleBloqueSelect = (bloque) => {
    setBloqueSeleccionado(bloque);
  };

  const bloques = [
    ...new Set(
      plazas
        .filter((plaza) => plaza.estado === "libre" || plaza.estado === "ocupado")
        .map((plaza) => plaza.bloque)
    ),
  ];
  const plazasDisponibles = plazas.filter(
    (plaza) =>
      plaza.estado === "libre" &&
      (bloqueSeleccionado === "" || plaza.bloque === bloqueSeleccionado)
  );

  const plazasOcupadas = plazas.filter(
    (plaza) =>
      plaza.estado === "ocupado" &&
      (bloqueSeleccionado === "" || plaza.bloque === bloqueSeleccionado)
  );

  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
        <div className='padre'> 
         
        <nav className='cabezeraParqueo'>
                        <h2 id='tituloParqueos'>
                            sitios
                        </h2>
                        <button 
                            
                            id='botonRegistrarParqueo'
                            onClick={()=>navigate('/registrarSitio')}
                        >
                            <h4>Registrar sitio</h4>
                        </button>
                        <select
              value={bloqueSeleccionado}
              onChange={(e) => handleBloqueSelect(e.target.value)}
              className="select-bloque"
            >
              <option value="">selecione Bloques</option>
              {bloques.map((bloque) => (
                <option key={bloque} value={bloque}>
                  Bloque {bloque}
                </option>
              ))}
            </select>
            </nav>
            <div className="parqueo">
        {bloqueSeleccionado !==""&&  (
          <div className="plazas-disponibles">
            {plazasDisponibles.length > 0 ? (
              <PlazasDisponibles
                plazas={plazasDisponibles}
                handleClick={handleClick}
                bloqueSeleccionado={bloqueSeleccionado}
              />
            ) : (
              <p>No hay plazas disponibles en este bloque.</p>
            )}
          </div>
        )}
        {bloqueSeleccionado !==""&&(
            <div className="plaza-ocupadas">
            
           <PlazasOcupadas
              plazas={plazasOcupadas}
              handleClick={handleClick}
              bloqueSeleccionado={bloqueSeleccionado}
            />
            </div>
        )
        
        }  </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Parqueo;

