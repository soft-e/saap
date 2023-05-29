import { Navigate, useNavigate } from "react-router-dom";
import ButtonBoxAdmin from "../../components/ButtonBoxAdmin";
import Navbar from "../../components/Navbar";
import "../../assets/css/css-rodrigo/contratoPage.css";

function ContratoPage(){
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
          className="tituloContrato"
        >
          <h1>Contratos</h1>
          <button
            onClick={()=>navigate("/contrato/new/cliente")}
            className="botonAtencion"
          >Registrar Contrato</button>
        </div>
        <div
          className="espacioCards"
        ></div>
      </div>
    </div>
  </>
}
export default ContratoPage;