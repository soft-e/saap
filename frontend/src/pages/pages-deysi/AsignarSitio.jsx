// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import "../../assets/css/css-deysi/asignarSitio.css";

function AsignarSitio() {
  const [bloques, setBloques] = useState([]);
  const [sitiosLibres, setSitiosLibres] = useState([]);
  const [selectedBloque, setSelectedBloque] = useState("");
  const [selectedSitio, setSelectedSitio] = useState("");
  const navigate = useNavigate();
  const [sitiosLibresBloque, setSitiosLibresBloque] = useState([]);

  useEffect(() => {
    obtenerBloques();
    getSitiosLibres();
  }, []);

  const obtenerBloques = () => {
    axios
      .get("http://localhost:8000/api/parqueos")
      .then((response) => {
        const bloques = response.data;
        console.log("Bloques:", bloques); // Verificar los datos recibidos
        setBloques(bloques);
      })
      .catch((error) => {
        console.error("Error al obtener los bloques:", error);
      });
  };

  const getSitiosLibres = async () => {
    try {
      const response = await axios.get(
        "/api/plazas?estado=libre&_expand=parqueo"
      );
      const sitiosLibres = response.data;

      setSitiosLibres(sitiosLibres);
    } catch (error) {
      console.error("Error al obtener los sitios libres:", error);
    }
  };

  const obtenerSitiosLibresBloque = () => {
    if (selectedBloque) {
      const sitiosBloque = sitiosLibres.filter(
        (sitio) => sitio.parqueo.bloque === selectedBloque
      );
      setSitiosLibresBloque(sitiosBloque);
      if (sitiosBloque.length > 0) {
        setSelectedSitio(sitiosBloque[0].id);
      } else {
        setSelectedSitio("");
      }
    } else {
      setSelectedSitio("");
      setSitiosLibresBloque([]);
    }
  };

  useEffect(() => {
    obtenerSitiosLibresBloque();
  }, [selectedBloque]);

  const handleFinalizar = (event) => {
    event.preventDefault();

    if (!selectedBloque) {
      console.log("Debes seleccionar un bloque");
      return;
    }

    if (!selectedSitio) {
      console.log("Debes seleccionar un sitio");
      return;
    }
    axios
      
    .post("http://localhost:8000/api/sitio_clientes", {
      bloque_id: bloques,
      sitio_id: selectedSitio,
    })
    .then((response) => {
      console.log("Asignación registrada con éxito:", response.data);
      axios
      .put(`http://localhost:8000/api/plazas/${selectedSitio}`, {
        estado: "ocupado",
      })
      .then((response) => {
        console.log("Estado del sitio actualizado:", response.data);

        setSelectedBloque("");
        setSelectedSitio("");

        getSitiosLibres();
        navigate("/sitios");
      })
      .catch((error) => {
        console.error("Error al actualizar el estado del sitio:", error);
      });
  })
  .catch((error) => {
    console.error("Error al registrar la asignación:", error);
  });
    // Resto del código para enviar la solicitud de asignación y actualizar el estado del sitio

    // ...

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
                    onChange={(event) =>
                      setSelectedBloque(event.target.value)
                    }
                  >
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
                      {sitiosLibresBloque.length > 0
                        ? sitiosLibresBloque[0].numero
                        : "No hay sitios disponibles"}
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
