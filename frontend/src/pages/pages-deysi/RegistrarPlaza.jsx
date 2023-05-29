import axios from "axios";
import { useState, useEffect } from "react";
import "../../assets/css/css-deysi/registrarPlaza.css";
import "../../assets/css/css-eriel/RegistroParqueo.css";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";

const endPoint = "http://localhost:8000/api";

function RegistrarPlaza() {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [bloque, setBloque] = useState("");
  const [bloques, setBloques] = useState([]);

  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    obtenerBloques();
  }, []);

  const obtenerBloques = async () => {
    try {
      const response = await axios.get(`${endPoint}/parqueos`);
      const data = response.data;
      const bloquesUnicos = [
        ...new Set(data.map((item) => item.nombre_bloque)),
      ];
      setBloques(bloquesUnicos);
    } catch (error) {
      console.log("Ocurrió un error al obtener los bloques:", error);
    }
  };

  const guardarPlaza = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${endPoint}/plazas`, {
        nombre: nombre,
        estado: estado,
        bloque: bloque,
      });
      setSuccessMessage("Registrado exitosamente.");
      setShowSuccessMessage(true);
      setNombre("");
      setEstado("");
      setBloque("");

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.log("Ocurrió un error al registrar:", error);
    }
  };

  function cancelarRegistro(event) {
    event.preventDefault();
    setNombre("");
    setEstado("");
    setBloque("");
  }

  return (
    <>
      <Navbar accion="iniciar sesion" />
      <div className="espacioPagina">
        <ButtonBoxAdmin />
        <div className="espacioDeTrabajo">
          <div className="padreParqueo">
            <form className="formularioParqueo">
              <div className="contenedorParqueo">
                <h1 id="tituloParqueo">Registro de plaza</h1>
                {showSuccessMessage && (
                  <div className="success-message">
                    <p>{successMessage}</p>
                  </div>
                )}
                <div id="entradaP" className="entradaP1">
                  <label>Nombre del lugar</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    id="inputText"
                    placeholder="Escribe el nombre"
                    required
                  />
                </div>
                <div id="entradaP" className="entradaP1">
                  <label htmlFor="inputEstado">Selecciona estado:</label>
                  <select
                    id="inputEstado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="inputText"
                  >
                    <option value="">Selecciona estado</option>
                    <option value="libre">Libre</option>
                    <option value="ocupado">Ocupado</option>
                  </select>
                </div>
                <div id="entradaP" className="entradaP1">
                  <label htmlFor="inputBloque">Selecciona bloque:</label>
                  <select
                    id="inputBloque"
                    value={bloque}
                    onChange={(e) => setBloque(e.target.value)}
                    className="inputText"
                  >
                    <option value="">Selecciona bloque</option>
                    {bloques.map((bloque) => (
                      <option key={bloque} value={bloque}>
                        {bloque}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="contenedorBotonP">
                  <button
                    className="botonInicioSesion"
                    type="submit"
                    onClick={guardarPlaza}
                  >
                    Registrar
                  </button>
                  <button
                    id="cancelar"
                    className="botonInicioSesion botonCancelar"
                    type="submit"
                    onClick={cancelarRegistro}
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

export default RegistrarPlaza;
