import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar.jsx";
import React, { useEffect, useState } from 'react';
import CardTarifa from "../../components/CardTarifa.jsx";
import '../../assets/css/css-jhonatan/cardTarifa.css';


function TarifaPage(){

    return<>
    <Navbar accion="cerrar sesion"/>
    <div className="espacioPagina">
      <ButtonBoxAdmin />
      <div className="contenedor_personal">
      <h1 className="title">Tarifa</h1>
        <button className="button">Registrar Tarifa</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <CardTarifa/>
        </div>
      </div>
    </div>
    </> 
  }

export default TarifaPage;