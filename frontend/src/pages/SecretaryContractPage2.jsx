import ButtonBoxSecretary from "../components/ButtonBoxSecretary";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../assets/css/css-rodrigo/secretariaContractPage2.css";
import { useContratos } from "../context/context-rodrigo/ContratoProvider";
import { useEffect } from "react";
import { usePersonas } from "../context/context-rodrigo/PersonaProvider";
import { useDocentes } from "../context/context-rodrigo/DocenteProvider";
import { usePlazas } from "../context/context-rodrigo/PlazaProvider";
import { useVehiculos } from "../context/context-rodrigo/VehiculoProvider";


function SecretaryContractPage() {
  const { contratos, loadContratos, getContrato } = useContratos();
  const { personas, loadPersonas, getPersona } = usePersonas();
  const { docentes, loadDocentes, getDocente } = useDocentes();
  const { plazas, loadPlazas, getPlaza } = usePlazas();
  const { vehiculos, loadVehiculos, getVehiculo } = useVehiculos();

  const navigate = useNavigate();
  useEffect(() => {
    loadContratos();
    loadDocentes();
    loadPlazas();
  }, []);

  console.log(contratos);
  
  const site =(id)=>{
    const findedSite = plazas.find((plaza)=>{
      return id===plaza.id
    })
    console.log(findedSite);
    return findedSite;
  }
  console.log(site(1))

  const MostrarContratos = ()=>{
    contratos.map((contrato,index)=>{
      <h1>asdf</h1>
    })
  }
  
  return <>
    <Navbar accion="cerrar sesion" />
    <div
      className="espacioPagina"
    >
      <ButtonBoxSecretary />

      <div
        className="espacioDeTrabajo"
      >
        <h1
          className="tituloContratoSecre"
        >Contratos</h1>
        <div
          className="espacioTabla"
        >
          <table>
            <thead>
              <tr>
                <th>nombre</th>
                <th>apellidos</th>
                <th>sitio</th>
                <th>bloque</th>
                <th></th>
              </tr>
              {MostrarContratos}
            </thead>
          </table>
        </div>
      </div>
    </div>
  </>
}
export default SecretaryContractPage;