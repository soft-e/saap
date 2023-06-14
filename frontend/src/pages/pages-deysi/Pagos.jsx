// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../../assets/css/css-deysi/formularioResponderQueja.css";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxSecretary from "../../components/ButtonBoxSecretary";

import { URL_API } from "../../services/EndPoint";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Pagos() {
  const [tarifaTotal, setTarifaTotal] = useState({});
  const [montoPago, setMontoPago] = useState("");
  const [saldo, setSaldo] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL_API}/tarifa2s/ultimo`)
      .then((response) => {
        const ultimoCostoTarifa = response.data;
        setTarifaTotal(ultimoCostoTarifa);
      })
      .catch((error) => {
        console.error("Error al obtener el último costo de tarifa:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pagos = {
      tarifa2_id: tarifaTotal.id, // Utilizar el ID del último costo de tarifa
      monto_pagado: montoPago, // Utilizar el valor introducido por el usuario
      contrato_id: params.id, // Utilizar el contrato_id de useParams()
      saldo: saldo,
    };

    axios
      .post(`${URL_API}/registrarpago`, pagos)
      .then((response) => {
        console.log("Pago registrado:", response.data);
        navigate("/pagos");
      })
      .catch((error) => {
        console.error("Error al registrar el pago:", error);
      });
  };

  const handleCancel = () => {
    navigate("/pagos");
    setTarifaTotal({});
    setMontoPago("");
    setSaldo("");
  };

  return (
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
      <ButtonBoxSecretary/>
        <div className="espacioDeTrabajo">
          <div className="padreParqueo">
            <form className="formularioParqueo" onSubmit={handleSubmit}>
              <div className="contenedorParqueo">
                <h1 id="tituloParqueo">Pagos</h1>

                <label htmlFor="tarifaTotal" className="textoAsunto">
                  Tarifa total:
                </label>
                <div className="entradaP">
                  <input
                    type="text"
                    id="tarifaTotal"
                    value={tarifaTotal.tarifaTotal}
                    readOnly
                  />
                </div>

                <label htmlFor="montoPago" className="textoResponder">
                  Monto a pagar:
                </label>
                <div className="entradaP">
                  <input
                    type="text"
                    id="montoPago"
                    value={montoPago}
                    onChange={(e) => setMontoPago(e.target.value)}
                  />
                </div>

                <label htmlFor="saldo" className="textoResponder">
                  Saldo:
                </label>
                <div className="entradaP">
                  <input
                    type="
                    text"
                    id="saldo"
                    value={saldo}
                    readOnly
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

export default Pagos;
