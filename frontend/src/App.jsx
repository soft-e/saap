import {Route,Routes} from "react-router-dom";
import PrincipalPage from './pages/PrincipalPage';
//import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import PersonalPage from "./pages/pages-jhonatan/PersonalPage";
import TarifaPage from "./pages/pages-jhonatan/TarifaPage";
//import AdminPageR from "./pages/AdminPageR";
import NotFound from "./pages/NotFound";
import TemplatePage from "./pages/TemplatePage";
import AtencionPage from "./pages/pages-rodrigo/AtencionPage";
import './App.css'
import RegistroParqueo from "./pages/pages-eriel/RegistroParqueo";
import RegistroDTvehiculo from "./pages/pages-eriel/RegistroDTvehiculo";
import { AtencionContextProvider } from "./context/context-rodrigo/AtencionProvider";
import AtencionForm from "./pages/pages-rodrigo/AtencionForm";
import { TarifaContextProvider } from "./context/context-jhonatan/TarifaProvider";
import TarifaForm from "./pages/pages-jhonatan/TarifaForm";
import ContratosPage from "./pages/pages-jhonatan/ContratosPage";

function App() {
  //const [count, setCount] = useState(0)
  //logout="Cerrar Sesion";
  return (
    <div id="mainheader">
      <AtencionContextProvider>
      <TarifaContextProvider>
      <Routes>
        <Route path="/" element={<PrincipalPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/personal" element={<PersonalPage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/template" element={<TemplatePage/>}/>
        <Route path="/atencion" element={<AtencionPage/>}/>
        <Route path="/atencion/edit/:id" element={<AtencionForm/>}/>
        <Route path="/registroparqueo" element={<RegistroParqueo/>}/>
        <Route path="/registrovehiculo" element={<RegistroDTvehiculo/>}/> 
        <Route path="/tarifa" element={<TarifaPage/>}/>
        <Route path="/tarifa/edit/:id" element={<TarifaForm/>}/>
        <Route path="/contratos" element={<ContratosPage/>}/>     
      </Routes>
      </TarifaContextProvider>
      </AtencionContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
