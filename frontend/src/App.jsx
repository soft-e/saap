import {Route,Routes} from "react-router-dom";
import PrincipalPage from './pages/PrincipalPage';
//import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import PersonalPage from "./pages/pages-jhonatan/PersonalPage";
import TarifaPage from "./pages/pages-jhonatan/TarifaPage";
import RegistrarPersonal from "./pages/pages-jose/RegistrarPersonal"
import ListarDocentes from "./pages/pages-jose/ListarDocentes"
//import AdminPageR from "./pages/AdminPageR";
import NotFound from "./pages/NotFound";
import TemplatePage from "./pages/TemplatePage";
import AtencionPage from "./pages/pages-rodrigo/AtencionPage";
import './App.css'
import RegistroParqueo from "./pages/pages-eriel/RegistroParqueo";
import RegistroDTvehiculo from "./pages/pages-eriel/RegistroDTvehiculo";
import Parqueos from "./pages/pages-eriel/Parqueos";
import EditarParqueo from "./pages/pages-eriel/EditarParqueo";
import { AtencionContextProvider } from "./context/context-rodrigo/AtencionProvider";
import AtencionForm from "./pages/pages-rodrigo/AtencionForm";

import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";
import Parqueo from "./pages/pages-deysi/Parqueo";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";
import ContratoPage from "./pages/pages-rodrigo/ContratoPage"
import ContratoCliente from "./pages/pages-rodrigo/ContratoClientePage";
import ContratoVehiculo from "./pages/pages-rodrigo/ContratoVehiculoPage";
import ContratoSitioCliente from "./pages/pages-rodrigo/ContratoSitioClientePage";
import { DocenteContextProvider } from "./context/context-rodrigo/DocenteProvider";
import { PersonaContextProvider } from "./context/context-rodrigo/PersonaProvider";
/*import Parqueo from "./pages/pages-deysi/Parqueo";
import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";*/

function App() {
  //const [count, setCount] = useState(0)
  //logout="Cerrar Sesion";
  return (
    <div id="mainheader">
      <PersonaContextProvider>
      <DocenteContextProvider>
      <AtencionContextProvider>
      <Routes>
        <Route path="/" element={<PrincipalPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/personal" element={<PersonalPage/>}/>
        <Route path="/personal/registrar" element={<RegistrarPersonal/>}/>
        <Route path="/listardocentes" element={<ListarDocentes/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/template" element={<TemplatePage/>}/>
        <Route path="/atencion" element={<AtencionPage/>}/>
        <Route path="/atencion/new" element={<AtencionForm/>}/>
        <Route path="/atencion/edit/:id" element={<AtencionForm/>}/>
        <Route path="/registroparqueo" element={<RegistroParqueo/>}/>
        <Route path="/registrovehiculo" element={<RegistroDTvehiculo/>}/> 
        <Route path="/parqueos" element={<Parqueos/>}/> 
        <Route path="/editarparqueos/:id" element={<EditarParqueo/>}/> 
        <Route path="/tarifa" element={<TarifaPage/>}/>   
        <Route path="sitios" element={<Parqueo/>}/>
        <Route path="/registrarSitio" element={<RegistrarPlaza/>}/>
        <Route path="/asignarSitio" element={<AsignarSitio/>}/>
        <Route path="/contrato" element={<ContratoPage/>}/>
        <Route path="/contrato/new/cliente" element={<ContratoCliente/>}/>
        <Route path="/contrato/new/vehiculo" element={<ContratoVehiculo/>}/>
        <Route path="/contrato/new/sitio" element={<ContratoSitioCliente/>}/>
      </Routes>
      </AtencionContextProvider>
      </DocenteContextProvider>
      </PersonaContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
