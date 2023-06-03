import axios from "axios";
import { useState, useEffect } from "react";
import "../../assets/css/css-deysi/registrarPlaza.css";
import "../../assets/css/css-eriel/RegistroParqueo.css";
import "../../assets/css/templatePage.css";
import Navbar from "../../components/Navbar";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";

const endPoint = "http://localhost:8000/api";


function RegistrarPlaza() {
  const [bloque, setBloque] = useState("");
  const [bloques, setBloques] = useState([]);
  const [plazas, setPlazas] = useState({});
  const [numero, setNumero] = useState(1);
  const [sitios,setSitios] = useState(); 

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
      inicializarPlazas(bloquesUnicos);
      const plaza = await axios.get(`${endPoint}/plazas`);
      const dataPlazas = plaza.data;
      console.log(dataPlazas.length+1);
      setSitios(dataPlazas);
      //setNumero(dataPlazas.length+1);
    } catch (error) {
      console.log("Ocurrió un error al obtener los bloques:", error);
    }
  };



  const inicializarPlazas = (bloques) => {
    const plazasInicializadas = {};
    bloques.forEach((bloque) => {
      plazasInicializadas[bloque] = 1;
    });
    setPlazas(plazasInicializadas);
  };

  const guardarPlaza = async (e) => {
    e.preventDefault();
    try {
      console.log(numero);
      await axios.post(`${endPoint}/plazas`, {
        numero: numero,
        estado: "libre",
        bloque: bloque,
      });

      setPlazas((prevPlazas) => {

        return {
          ...prevPlazas,
          [bloque]: prevPlazas[bloque] + 1,
        };
      });
      setBloque("");
      obtenerBloques();
      alert("se registro con exito");
    } catch (error) {
      console.log("Ocurrió un error al registrar:", error);
    }
  };

  const seleccionarBloque = (e) => {
    setBloque(e.target.value);
    setNumero(plazas[e.target.value]);
    
     console.log(e.target.value);
     console.log(sitios);
     let result = sitios.filter((sitio) =>sitio.bloque == e.target.value);
     console.log(result);
     setNumero(result.length+1);

  };
  

  

  const cancelarRegistro = () => {
    setBloque("");
  };

   

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
                <div id="entradaP" className="entradaP1">
                  <label htmlFor="inputBloque">Selecciona bloque:</label>
                  <select
                    id="inputBloque"
                    value={bloque} 
                    onChange={seleccionarBloque}
                    
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

                <div id="entradaP" className="entradaP1">
                <label htmlFor="inputText">Numero de sitio:</label>
                  <input
                 
                    type="number"
                    value={numero}
                    disabled
                    //onChange={(e) => setNumero(e.target.value)}
                    id="inputText"
                    placeholder="inputText"
                    required
                  />
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
