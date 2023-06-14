import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import "../../assets/css/css-rodrigo/reportesPage.css"
import { usePagos } from "../../context/context-rodrigo/PagoProvider";
import { useEffect, useState } from "react";
import { useTarifa2 } from "../../context/context-rodrigo/Tarifa2Provider";
import { useParqueos } from "../../context/context-rodrigo/ParqueoProvider";
import { usePlazas } from "../../context/context-rodrigo/PlazaProvider";
import { useContratos } from "../../context/context-rodrigo/ContratoProvider";
function ReportesPage() {
  const { pagos, loadPagos } = usePagos();
  const { tarifa2s, loadTarifa2s } = useTarifa2();
  const { parqueos, loadParqueos } = useParqueos();
  const { plazas, loadPlazas } = usePlazas();
  const { contratos, loadContratos } = useContratos();

  useEffect(() => {
    loadPagos();
    loadTarifa2s();
    loadParqueos();
    loadPlazas();
    loadContratos();
  }, []);
  console.log(pagos);
  console.log(tarifa2s);
  console.log(parqueos);
  console.log(plazas);
  console.log(contratos);

  const getFreeSpaces = () => {
    let freeSpaces = 0;
    for (let i = 0; i < parqueos.length; i++) {
      freeSpaces += parqueos[i].cantidad_sitios;
    }
    //console.log(freeSpaces);
    return freeSpaces;
  }

  const getAssignedSpaces = () => {
    let assignedSpaces = 0;
    let nameParks = [];
    for (let i = 0; i < parqueos.length; i++) {
      nameParks[i] = parqueos[i].nombre_bloque;
    }
    //console.log(nameParks);
    for (let i = 0; i < nameParks.length; i++) {
      let namePark = nameParks[i];
      for (let j = 0; j < plazas.length; j++) {
        if (namePark === plazas[j].bloque) {
          assignedSpaces++;
        }
      }
    }
    //console.log(assignedSpaces);
    return assignedSpaces;
  }

  const getUnAssignedSpaces = () => {
    let unAssignedSpaces = 0;
    unAssignedSpaces = getFreeSpaces() - getAssignedSpaces();
    return unAssignedSpaces;
  }

  const totalCollection = () => {
    let total = 0;
    for (let i = 0; i < pagos.length; i++) {
      total += pagos[i].monto_pagado;
    }
    return total;
  }
  const expectedCollection = () => {
    let expected = 0;
    for (let i = 0; i < pagos.length; i++) {
      for (let j = 0; j < tarifa2s.length; j++) {
        if (pagos[i].tarifa2_id === tarifa2s[j].id) {
          expected += tarifa2s[j].costo_tarifa;
        }

      }
    }
    return expected;
  }

  const getArrears = () => {
    let arrears = expectedCollection() - totalCollection();
    return arrears;
  }

  const getCustomersInArrears = () => {
    let customersInArrears = 0;
    let morosos = [];
    for (let i = 0; i < contratos.length; i++) {
      let contratoID = contratos[i].id;
      let cantPagosRealizados = acumularPagosPorContrato(contratos[i].id);
      console.log(cantPagosRealizados);
      let cantPagosEsperados = acumularTarifasPorContrato(contratos[i].id, contratos[i].created_at);
      console.log(cantPagosEsperados);
      //console.log(cantPagosEsperados)
      //console.log(cantPagosEsperados);
      //if(cantPagosRealizados<cantPagosEsperados){
      //morosos.push(contratos[i].id);
      //console.log(morosos)
      //}
      if (cantPagosRealizados < cantPagosEsperados) {
        morosos.push(contratos[i]);
      }
    }
    console.log(morosos);
    return morosos.length;

  }

  const acumularPagosPorContrato = (contratoID) => {
    //console.log(contratoID);
    let acumulador = 0;
    for (let j = 0; j < pagos.length; j++) {
      if (pagos[j].contrato_id === contratoID) {
        acumulador += pagos[j].monto_pagado;
      }
    }
    return acumulador;
  }

  const acumularTarifasPorContrato = (contratoID, fecha) => {
    //console.log("la fecha del contrato es: "+fecha);
    let fechaContrato = new Date(fecha);
    //console.log("la fecha del contrato es: "+fechaContrato);
    let mesContrato = fechaContrato.getMonth() + 1;
    //console.log("el mes es: "+mesContrato);
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    //return mesActual;
    let acumulador = 0;
    pagos.forEach(pago => {
      if (pago.contrato_id===contratoID) {
        tarifa2s.forEach(tarifa2 => {
          if (pago.tarifa2_id===tarifa2.id) {
            acumulador+=tarifa2.costo_tarifa;
          }
        });
      }
    });
    return acumulador;
  }

  const selectMonth = () => {
    
    return (
      <select name="selectMonth" id="selectMonth"
        className="selectMonth"
      >
        <option value="1">Abril</option>
        <option value="2">Mayo</option>
      </select>
    )
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
              {selectMonth()}
              <select name="selectWeek" id="selectWeek"
                className="selectWeek"
              >
                <option value="1">Semana 3</option>
                <option value="2">Semana 4</option>
              </select>
            </div>
            <div
              className="espacioCardsReportes"
            >
              <div
                className="cardRecaudaciones"
              >
                <h3>Recaudaciones</h3>
                <p>recaudacion actual:</p>
                <p>{totalCollection()} Bs.</p>
                <p>recaudacion esperada:</p>
                <p>{expectedCollection()} Bs.</p>
                <p>mora total:</p>
                <p>{getArrears()} Bs.</p>
              </div>
              <div
                className="cardClientesEnMora"
              >
                <h3>Clientes en mora</h3>
                <div
                  className="espacioCardClientesEnMora"
                >
                <p>{getCustomersInArrears()}</p>
                </div>
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