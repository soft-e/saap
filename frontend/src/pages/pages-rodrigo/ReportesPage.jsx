import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import "../../assets/css/css-rodrigo/reportesPage.css"
import { usePagos } from "../../context/context-rodrigo/PagoProvider";
import { useEffect, useState } from "react";
import { useTarifa2 } from "../../context/context-rodrigo/Tarifa2Provider";
import { useParqueos } from "../../context/context-rodrigo/ParqueoProvider";
import { usePlazas } from "../../context/context-rodrigo/PlazaProvider";
function ReportesPage() {
  const {pagos,loadPagos}=usePagos();
  const {tarifa2s,loadTarifa2s}=useTarifa2();
  const {parqueos,loadParqueos}=useParqueos();
  const {plazas,loadPlazas}=usePlazas();

  useEffect(()=>{
    loadPagos();
    loadTarifa2s();
    loadParqueos();
    loadPlazas();
  },[]);
  console.log(pagos);
  console.log(tarifa2s);
  console.log(parqueos);
  console.log(plazas);

  
  const getFreeSpaces=()=>{
    let freeSpaces=0;
    for (let i = 0; i < parqueos.length; i++) {
      freeSpaces += parqueos[i].cantidad_sitios;
    }
    //console.log(freeSpaces);
    return freeSpaces;
  }

  const getAssignedSpaces=()=>{
    let assignedSpaces=0;
    let nameParks = [];
    for (let i = 0; i < parqueos.length; i++) {
      nameParks[i]=parqueos[i].nombre_bloque;
    }
    //console.log(nameParks);
    for (let i = 0; i < nameParks.length; i++) {
      let namePark = nameParks[i];
      for (let j = 0; j < plazas.length; j++){
        if(namePark===plazas[j].bloque){
          assignedSpaces++;
        }
      }
    }
    //console.log(assignedSpaces);
    return assignedSpaces;
  }

  const getUnAssignedSpaces=()=>{
    let unAssignedSpaces=0;
    unAssignedSpaces = getFreeSpaces()-getAssignedSpaces();
    //console.log(unAssignedSpaces);
    return unAssignedSpaces;
  }

  const totalCollection=()=>{
    let total=0;
    for (let i = 0; i < pagos.length; i++) {
      total += pagos[i].monto_pagado;
    }
    return total;
  }
  const expectedCollection=()=>{
    let expected=0;
    let idTarifas=[];
    for (let i = 0; i < pagos.length; i++) {
      for (let j = 0; j < tarifa2s.length; j++) {
        if (pagos[i].tarifa2_id === tarifa2s[j].id) {
          expected+=tarifa2s[j].costo_tarifa;
        }
        
      }
    }
    return expected;
  }

  const getArrears=()=>{
    let arrears=expectedCollection()-totalCollection();
    return arrears;
  }


  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div
        className="espacioPagina"
      >
        <ButtonBoxAdmin />
        <div
          className="espacioDeTrabajo"
        >
          <div
            className="tituloPagina"
          >
            <h1>Reportes</h1>
          </div>
          <div
            className="espacioReportes"
          >
            <div
              className="espacioSelects"
            >
              <h2>seleccionar un mes y una semana</h2>
              <select name="selectMonth" id="selectMonth"
                className="selectMonth"
              >
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
              </select>
              <select name="selectWeek" id="selectWeek"
                className="selectWeek"
              >
                <option value="1">Semana 1</option>
                <option value="2">Semana 2</option>
                <option value="3">Semana 3</option>
                <option value="4">Semana 4</option>
              </select>
            </div>
            <div
              className="espacioCardsReportes"
            >
              <div
                className="cardRecaudaciones"
              >
                <h3>Recaudaciones</h3>
                <p>recaudacion total:</p>
                <p>{totalCollection()}</p>
                <p>recaudacion esperada:</p>
                <p>{expectedCollection()}</p>
                <p>mora total:</p>
                <p>{getArrears()}</p>
              </div>
              <div
                className="cardClientesEnMora"
              >
                <h3>Clientes en mora</h3>
              </div>
              <div
                className="cardEspaciosDisponibles"
              >
                <h3>Espacios disponibles</h3>
                <p>total espacios:</p>
                <p>{getFreeSpaces()}</p>
                <p>espacios asignados:</p>
                <p>{getAssignedSpaces()}</p>
                <p>espacios sin asignar:</p>
                <p>{getUnAssignedSpaces()}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ReportesPage;