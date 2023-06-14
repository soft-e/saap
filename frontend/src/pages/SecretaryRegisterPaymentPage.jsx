import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";
import { URL_API } from "../services/EndPoint";
import "../assets/css/css-deysi/formularioResponderQueja.css"
import { useParams, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
//actualizado
function SecretaryRegisterPaymentPage() {
  const [tarifaTotal, setTarifaTotal] = useState({});
  const [montoPago, setMontoPago] = useState("");
  const [saldoAnterior, setSaldoAnterior] = useState(null); // Inicializado como null
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL_API}/tarifa2/ultima`)
      .then((response) => {
        const ultimoCostoTarifa = response.data;
        setTarifaTotal(ultimoCostoTarifa);
      })
      .catch((error) => {
        console.error("Error al obtener el último costo de tarifa:", error);
      });

    axios
      .get(`${URL_API}/pagos/saldo/${params.id}`)
      .then((response) => {
        const saldoPago = response.data.saldo;
        setSaldoAnterior(saldoPago || 0); // Asignar 0 si no hay saldo anterior
      })
      .catch((error) => {
        console.error("Error al obtener el saldo del contrato:", error);
      });
  }, [params.id]);

  const recalculateSaldo = () => {
    const tarifa = parseFloat(tarifaTotal.costo_tarifa);
    const monto = parseFloat(montoPago);

    if (isNaN(tarifa) || isNaN(monto)) {
      return "";
    }

    // Verificar si hay saldo anterior y calcular el saldo actualizado
    const saldoActualizado = saldoAnterior !== null ? (saldoAnterior + tarifa - monto).toFixed(0) : "";

    return saldoActualizado;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saldo = recalculateSaldo();

    const pagos = {
      tarifa2_id: tarifaTotal.id,
      monto_pagado: montoPago,
      contrato_id: params.id,
      saldo: saldo,
    };
    
    axios
      .post(`${URL_API}/pagos`, pagos)
      .then((response) => {
        console.log("Pago registrado:", response.data);
        navigate("/secretary/contract");
      })
      .catch((error) => {
        console.error("Error al registrar el pago:", error);
      });
  };

  const handleCancel = () => {
    navigate("/secretary/contract");
    setTarifaTotal({});
    setMontoPago("");
    setSaldoAnterior(null);
  };

  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div className="espacioPagina">
        <ButtonBoxSecretary />
        <div className="espacioDeTrabajo">
          <div className="padreParqueo">
            <form className="formularioParqueo" onSubmit={handleSubmit}>
              <div className="contenedorParqueo">
                <h1 id="tituloParqueo">Pagos</h1>

                <div style={{ color: "red" }}>
                  Deuda Anterior:{" "}
                  {saldoAnterior !== null ? parseFloat(saldoAnterior).toFixed(0) : ""}
                </div>
                <div style={{ color: "blue" }}>
                  Total Pago:{" "}
                  {saldoAnterior !== null ? parseFloat(saldoAnterior + tarifaTotal.costo_tarifa).toFixed(0) : ""}
                </div>

                <label htmlFor="tarifaTotal" className="textoAsunto">
                  Tarifa:
                </label>
                <div className="entradaP">
                  <input
                    type="number"
                    id="tarifaTotal"
                    value={tarifaTotal.costo_tarifa}
                    disabled
                    readOnly
                    style={{ textAlign: "center" }}
                  />
                </div>

                <label htmlFor="montoPago" className="textoResponder">
                  Monto a pagar:
                </label>
                <div className="entradaP">
                  <input
                    type="number"
                    id="montoPago"
                    value={montoPago}
                    onChange={(e) => {
                      setMontoPago(e.target.value);
                      
                    }}
                    style={{ textAlign: "center" }}
                  />
                </div>

                <label htmlFor="saldo" className="textoResponder">
                  Saldo:
                </label>
                <div className="entradaP">
                  <input
                  
                    type="number"
                    id="saldo"
                    value={recalculateSaldo()}
                    readOnly
                    disabled
                    style={{ textAlign: "center" }}
                  />
                </div>

                <div className="contenedorBotonP">
                  <button className="botonInicioSesion" type="submit">
                    Registrar
                  </button>

                  <button
                    id="cancelar"
                    className="botonInicioSesion botonCancelar"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecretaryRegisterPaymentPage;
