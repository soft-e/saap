import { useNavigate } from "react-router-dom";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";

function ContratoVehiculo(){
  const navigate = useNavigate();
  return <>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxAdmin/>
      <div
        className="espacioDeTrabajo"
      >
        <div
          className="TituloVehiculo"
        >
          <h1>Registrar Vehiculo(s)</h1>
        </div>
        <div
          className="espacioCards"
        >
          <form action="">
            <h1>
              Datos del Vehiculo
            </h1>
            <div
              className="contenedorInputs"
            >
              <h2>
                placa
              </h2>
              <input type="text" />
              <h2>
                color
              </h2>
              <input type="text" />
              <h2>
                marca
              </h2>
              <input type="text" />
              <h2>
                modelo
              </h2>
              <input type="text" />
            </div>
            <div
              className="espacioBotonces"
            ></div>
            <button>
              registrar
            </button>
            <button
              onClick={()=>navigate("/contrato/new/sitio")}
            >
              siguiente
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
}
export default ContratoVehiculo;