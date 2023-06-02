// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import "../../assets/css/css-deysi/asignarSitio.css";
import { useParams } from "react-router-dom";
function AsignarSitio() {
const [bloques, setBloques] = useState([]);


  const [selectedBloque, setSelectedBloque] = useState("");
  const [selectedSitio, setSelectedSitio] = useState("");

  const navigate = useNavigate();

  const params = useParams();
  //obtenemos  bloques de la tabla plazas
 
  

  useEffect(() => {
    obtenerBloques();
   
    console.log(params.idc);
    console.log(params.idv);
   
    
  }, []);

  const obtenerBloques = () => {
    axios
      .get("http://localhost:8000/api/plazas/obtener-bloques")
      .then((response) => {
        const bloques = response.data;
        setBloques(bloques);
      })
      .catch((error) => {
        console.error("Error al obtener los bloques:", error);
      });
  };

  const handleBloqueChange = (event) => {
    const bloque = event.target.value;
    setSelectedBloque(bloque);
    if (bloque) {
      console.log("Bloque seleccionado:", bloque);
      obtenerPrimerSitioLibre(bloque);
    } else {
      setSelectedSitio("");
    }
  };

  /* const obtenerPrimerSitioLibre = (bloque) => {
    axios
  .get(`http://localhost:8000/api/plazas/primer-sitio-libre/${bloque}`)
 // http://localhost:8000/api/plazas/primer-sitio-libre/${bloque}
  .then((response) => {
    const primerSitioLibre = response.data.sitio.numero;
    setSelectedSitio(primerSitioLibre);
  })
  .catch((error) => {
    console.error('Error al obtener el primer sitio libre:', error);
  });

  };*/

  const obtenerPrimerSitioLibre = (bloque) => {
    axios
      .get(`http://localhost:8000/api/plazas/primer-sitio-libre/${bloque}`)
      .then((response) => {
        const primerSitioLibre = response.data;
        console.log(primerSitioLibre);
        if (primerSitioLibre && primerSitioLibre.numero) {
          setSelectedSitio(primerSitioLibre.numero);
          console.log("Sitio libre obtenido:", primerSitioLibre.numero);
        } else {
          console.log("No hay sitios libres en el bloque seleccionado");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el primer sitio libre:", error);
      });
  };

  const handleFinalizar = (event) => {
    event.preventDefault();

    if (!selectedBloque) {
      console.log("Debes seleccionar un bloque");
      return;
    }

    if (!selectedSitio) {
      console.log("No hay sitios libres en el bloque seleccionado");
      return;
    }

    //finaliza la asignacion y actualiza el estado del sitio

    axios
      .post("http://localhost:8000/api/contrato", {
        // bloque_id: selectedBloque,//mm datos no utilizado
        sitio_id: selectedSitio,
        bloque: selectedBloque,
        docente_id: params.idc,
        vehiculo_id: params.idv,

      })

      .then((response) => {
        console.log("Asignación registrada con éxito:", response.data);

        setSelectedBloque("");
        setSelectedSitio("");

        navigate("/listardocentes");
          
      })
      .catch((error) => {
        console.error("Error al registrar la asignación:", error);
      });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setSelectedBloque("");
    setSelectedSitio("");
  };

  return (
    <>
      <Navbar accion="iniciar sesión" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="padreParqueo">
            <form className="formularioParqueo">
              <div className="contenedorParqueo">
                <h1 id="tituloParqueo">Datos del parqueo</h1>
                <div id="entradaP" className="entradaP1">
                  <label>Bloque:</label>
                  <select
                    value={selectedBloque}
                    onChange={handleBloqueChange}
                    // onChange={(event) => setSelectedBloque(event.target.value)}
                  >
                    <option value="">Selecciona un bloque</option>
                    {bloques.map((bloque) => (
                      <option key={bloque} value={bloque}>
                        {bloque}
                      </option>
                    ))}
                  </select>
                </div>

                <div id="entradaP" className="entradaP1">
                  <label>Sitio:</label>
                  {selectedBloque ? (
                    <label>
                      {selectedSitio
                        ? selectedSitio
                        : "No hay sitios disponibles en el bloque seleccionado"}
                    </label>
                  ) : (
                    <label>
                      Selecciona un bloque para ver los sitios disponibles
                    </label>
                  )}
                </div>

                <div className="contenedorBotonP">
                  <button
                    id="finalizar"
                    className="botonInicioSesion"
                    type="submit"
                    onClick={handleFinalizar}
                  >
                    Finalizar
                  </button>
                  <button
                    id="botonCancelarP"
                    className="botonInicioSesion botonCancelar"
                    type="submit"
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

export default AsignarSitio;
