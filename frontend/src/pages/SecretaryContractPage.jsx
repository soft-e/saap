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
                
                <div>
                    <CardContratosSecretaria/>
                </div>
            </div> 



      </div>
    </div>
  </>
}
export default SecretaryContractPage;