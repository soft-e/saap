import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar.jsx";
import React, { useEffect, useState } from 'react';
import '../../assets/css/css-jhonatan/cardPersonal.css';

function ContratosPage(){


  return (
    <div className="caja">
      <Navbar accion="cerrar sesion"/>
      <ButtonBoxAdmin />
      <div className="contenedor_personal">
        <h1 className="title">Contratos</h1>
        <button className="button">Registrar Contrato</button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        </div>
      </div>
    </div>
  );
}

export default ContratosPage;