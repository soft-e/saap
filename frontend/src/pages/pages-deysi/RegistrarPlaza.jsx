import axios from "axios";
import  { useState } from "react";
import "../../assets/css/css-deysi/registrarPlaza.css";
import "../../assets/css/css-eriel/RegistroParqueo.css";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";

const endPoint = "http://localhost:8000/api";

function RegistrarPlaza() {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${endPoint}/plazas`, {
        nombre: nombre,
        estado: estado,
      });
      setSuccessMessage("Registrado con éxito.");
      setShowSuccessMessage(true);
      setNombre("");
      setEstado("");

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.log("Ocurrió un error al registrar:", error);
    }
  };

  function handleCancel(event) {
    event.preventDefault();
    setNombre("");
    setEstado("");
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
                <h1 id="tituloParqueo">Registro de sitio</h1>
                {showSuccessMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
                <div id="entradaP" className="entradaP1" >
                  <label>Nombre de sitio</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    id="inputText"
                    placeholder="Escribe el nombre"
                    required
                  />
                </div>
                <div id="entradaP"  className="entradaP1">
                <label htmlFor="inputEstado">Seleccione estado:</label>
                  <select
                    id="inputEstado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="inputText"
                  >
                    <option value="" >Seleciones estado</option>
                    <option value="libre">Libre</option>
                    <option value="ocupado">Ocupado</option>

                  </select>
                </div>
                <div className="contenedorBotonP">
                  <button
                    className="botonInicioSesion"
                    type="submit"
                    onClick={store}
                  >
                    Registrar
                  </button>
                  <button
                   id="cancelar"
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

export default RegistrarPlaza;
