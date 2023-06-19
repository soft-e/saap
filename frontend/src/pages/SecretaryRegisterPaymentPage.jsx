// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";
import { URL_API } from "../services/EndPoint";
import "../assets/css/css-deysi/formularioResponderQueja.css";

function SecretaryRegisterPaymentPage() {
  const [tarifaTotal, setTarifaTotal] = useState({});
  const [montoPago, setMontoPago] = useState("");
 // const montoAPagar = parseFloat(e.target.value) + saldoAnterior;

  const [saldoAnterior, setSaldoAnterior] = useState(null);
  const [saldo, setSaldo] = useState(null);
  const [fechaPagoRegistrada, setFechaPagoRegistrada] = useState(null);
  const [total, setTotal] = useState(null);
  const params = useParams();
  const [tarifaRegistrada ,setTarifaRegistrada]=useState(null);
  const navigate = useNavigate();

 /* const handleChange = (e) => {
    setSaldo( parseFloat(tarifaRegistrada) + parseFloat(saldoAnterior) - parseFloat(montoPago));
    setMontoPago(e.target.value);
  };*/


  //actualizaciones-----------------------------------

  useEffect(() => {
    console.log("fechas vemos ",fechaPagoRegistrada);
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
        setSaldoAnterior(saldoPago || 0);
      })
      .catch((error) => {
        console.error("Error al obtener el saldo del contrato:", error);
      });

    axios
      .get(`${URL_API}/pagos/fechapago/${params.id}`)
      .then((response) => {
        const fechaPago = response.data;
        console.log("fecha a pagarr",fechaPago);
        setFechaPagoRegistrada(fechaPago);
      })
      .catch((error) => {
        console.error("Error al obtener la fecha de pago:", error);
      });
  }, [params.id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    const fechaMoment = moment.utc(
      fechaPagoRegistrada,
      "YYYY-MM-DDTHH:mm:ss.SSSSZ"
      
    );
    const fechaRegistroMes = fechaMoment.format("M");
    const fechaRegistroAño = fechaMoment.format("YYYY");
    
    const fechaActualMes = moment().format("M");
    const fechaActualAño = moment().format("YYYY");
    console.log("Fecha de registro - Mes:", fechaRegistroMes);
    console.log("Fecha de registro - Año:", fechaRegistroAño);
    console.log("Fecha actual - Mes:", fechaActualMes);
    console.log("Fecha actual - Año:", fechaActualAño);


    if ( fechaPagoRegistrada === null || fechaPagoRegistrada === undefined) {
      setTarifaRegistrada(tarifaTotal.costo_tarifa);
      const saldoTarifa = parseFloat(tarifaRegistrada) + parseFloat(saldoAnterior) - parseFloat(montoPago);
      setSaldo(saldoTarifa.toString());
      //const total = parseFloat(e.target.value) + saldoAnterior;
 setTotal( parseFloat(e.target.value)+saldoTarifa.costo_tarifa+ saldoAnterior);
      console.log("cual es",fechaPagoRegistrada);
      // Registro de pago sin verificaciones adicionales cuando no hay
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
    }
//hay igual
    if (
      fechaRegistroMes === fechaActualMes &&
      fechaRegistroAño === fechaActualAño
    ) {

      // Caso: fechaPago es igual a la fecha que quiero registrar y saldoAnterior > 0
      if (saldoAnterior > 0) {
        //tarifa le convierto en o
        const tarifaRegistrada = 0;
         const saldoTarifa = saldoAnterior - parseInt(montoPago);
         console.log("saldo anterior-monto pago",saldoTarifa);
       // const saldoTarifa = parseFloat(tarifaTotal.costo_tarifa) + parseFloat(saldoAnterior) - parseFloat(montoPago);
setSaldo(saldoTarifa.toString());

       // setSaldo(tarifaRegistrada + saldoAnterior - parseInt(montoPago));
        setTotal(tarifaRegistrada + saldoAnterior);
        
        const pagos = {
          tarifa2_id:tarifaTotal.id,
          monto_pagado: montoPago,
          contrato_id: params.id,
          saldo: saldoTarifa.toString(),
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
      } else {
        // Mostrar mensaje al cliente: "Estás al día con tus pagos"
        alert("Estás al día con tus pagos");
      }
    } else {
      // Caso: fechaPago es diferente a la fecha que quiero registrar y saldoAnterior > 0
      if (saldoAnterior > 0) {
        //tarifa ==a costo tarifa mensual
        const tarifaRegistrada = tarifaTotal.costo_tarifa;
            
        const montoAPagar = parseFloat(montoPago) + saldoAnterior;
        console.log("monto pagado", montoAPagar);
        const saldoTarifa =
          tarifaRegistrada + saldoAnterior - parseFloat(montoPago);
        setSaldo(saldoTarifa);
        setTotal(tarifaRegistrada + saldoAnterior);
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
      } else {
        // Caso: saldoAnterior es igual a 0
        const tarifaRegistrada = tarifaTotal.costo_tarifa;
        const saldoTarifa = tarifaRegistrada - parseFloat(montoPago);
        setSaldo(saldoTarifa.toString());
        setTotal(tarifaRegistrada + saldoAnterior);
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
      }
    }
  };

  const handleCancel = () => {
    navigate("/secretary/contract");
    setTarifaTotal({});
    setMontoPago("");
    setSaldoAnterior(null);
    setFechaPagoRegistrada(null);
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
                  Deuda Anterior:{saldoAnterior}
                </div>
                <div style={{ color: "blue" }}>Total Pago:{total}</div>
                

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
                   // onChange={handleChange}
                      onChange={(e) => setMontoPago(e.target.value)}
                    
                    style={{ textAlign: "center" }}
                  />
                </div>

                <label htmlFor="saldo" className="textoResponder">
                  Saldo:
                </label>
                <div className="entradaP">
                  <input
                    type="text"
                    id="saldo"
                    value={saldo}
                    readOnly
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