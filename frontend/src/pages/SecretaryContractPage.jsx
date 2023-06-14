import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";



import '../assets/css/css-jose/registrarPersonal.css'
import '../assets/css/css-jose/formularioRegistroPersonas.css'


import { useNavigate } from "react-router-dom";
import CardContratosSecretaria from "../components/componentes-jose/CardContratosSecretaria";

function SecretaryContractPage(){
  const navigate = useNavigate();
  function handleClik(){
    navigate('/listarDocentes');
}
  return<>
    <Navbar accion="cerrar sesion"/>
    <div
      className="espacioPagina"
    >
      <ButtonBoxSecretary/>
      
      <div
        className="espacioDeTrabajo"
      >
         <div className="contenedorContrato_j">
                <div className="contenedorContraroArriba_j">
                    <h1>Contratos</h1>
                    <button
                        className="styleButonVerDocentes_j"
                        onClick={ handleClik }
                    > Ver Docentes</button>
                </div>
                <div>
                    <CardContratosSecretaria/>
                </div>
            </div> 



      </div>
    </div>
  </>
}
export default SecretaryContractPage;