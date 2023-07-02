// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import "../../assets/css/css-deysi/asignarSitio.css";
import { useParams } from "react-router-dom";
import { URL_API } from '../../services/EndPoint';

function AsignarSitio() {
  const [bloques, setBloques] = useState([]);
  const [selectedBloque, setSelectedBloque] = useState("");
  const [selectedSitio, setSelectedSitio] = useState("");
  const [primerSitioLibre, setPrimerSitioLibre] = useState("");
  const [selectedBloqueNombre, setSelectedBloqueNombre] = useState("");
  
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    obtenerBloques();
    console.log(params.idc);
    console.log(params.idv);
  }, []);

  const obtenerBloques = () => {
    axios
      .get(`${URL_API}/parqueos`)
      .then((response) => {
        const bloques = response.data;
        console.log(bloques);
     
        const bloquesUnicos = bloques.filter(
          (bloque, index, self) =>
            index === self.findIndex((b) => b.nombre_bloque === bloque.nombre_bloque)           
        );
  
        setBloques(bloquesUnicos);
        console.log(bloquesUnicos);
      })
      .catch((error) => {
        console.error("Error al obtener los bloques:", error);
      });
  };

  const handleBloqueChange = (event) => {
    const bloqueId = event.target.value;
    setSelectedBloque(bloqueId);
  
    if (bloqueId) {
      obtenerPrimerSitioLibre(bloqueId);
      console.log(bloqueId);
    } else {
      setSelectedSitio("");
    }
  
    const selectedBloqueObj = bloques.find((bloque) => bloque.id === parseInt(bloqueId));
    console.log(selectedBloqueObj);
    const selectedBloqueNombre = selectedBloqueObj ? selectedBloqueObj.nombre_bloque : '';
    setSelectedBloqueNombre(selectedBloqueNombre);
    console.log(selectedBloqueNombre);
  };
  
  const obtenerPrimerSitioLibre = (bloqueId) => {
    axios
      .get(`${URL_API}/primersitiolibre/${bloqueId}`)
      .then((response) => {
        const primerSitioLibre = response.data;
       
        console.log(primerSitioLibre.id);
        if (primerSitioLibre && primerSitioLibre.numero_sitio) {
          setSelectedSitio(primerSitioLibre.numero_sitio);
          setPrimerSitioLibre(primerSitioLibre);
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

    axios
      .post(`${URL_API}/contrato`, {
        sitio_id: primerSitioLibre.id,
        bloque: selectedBloqueNombre,
        docente_id: params.idc,
        vehiculo_id: params.idv,
      })
      
        
     

        navigate("/contratos"); // Redirecciona a la página de contratos después de registrar la asignación
     
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setSelectedBloque("");
    setSelectedSitio("");
    setPrimerSitioLibre("");
    navigate("/listardocentes");
  };

  return (
    <>
      <Navbar accion="cerrar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <p className="botonAtras" onClick={() => navigate("/registrovehiculo")}>
          IR ATRAS
        </p>
        <div className="espacioDeTrabajo">
          <div className="padreParqueo">
            <form className="formularioParqueo">
              <div className="contenedorParqueo">
                <h1 id="tituloParqueo">Datos del parqueo</h1>
                <div id="entradaP" className="entradaP1">
                  <label>Bloque:</label>
                  <select value={selectedBloque} onChange={handleBloqueChange}>
                    <option value="">Selecciona un bloque</option>
                    {bloques.map((bloque) => (
                      <option key={bloque.id} value={bloque.id}>
                        {bloque.nombre_bloque}
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
