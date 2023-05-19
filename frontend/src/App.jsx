/* eslint-disable react/no-unescaped-entities */
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
import './App.css'
import RegistroParqueo from "./pages/pages-eriel/RegistroParqueo";
import RegistroDTvehiculo from "./pages/pages-eriel/RegistroDTvehiculo";
import Parqueo from "./pages/pages-deysi/Parqueo";
import AsignarSitio from "./pages/pages-deysi/AsignarSitio";
import RegistrarPlaza from "./pages/pages-deysi/RegistrarPlaza";



function App() {
  //const [count, setCount] = useState(0)
  //logout="Cerrar Sesion";
  
  return (
    <div id="mainheader">
      
      <Routes>
        <Route path="/" element={<PrincipalPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/personal" element={<PersonalPage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/template" element={<TemplatePage/>}/>
        <Route path="/registroparqueo" element={<RegistroParqueo/>}/>
        <Route path="/registrovehiculo" element={<RegistroDTvehiculo/>}/> 
        <Route path="/tarifa" element={<TarifaPage/>}/>      

     <Route path="/parqueo" element={<Parqueo/>}/>
     <Route path="/registrarSitio" element={<RegistrarPlaza/>}/>
     <Route path="/asignarsitio" element={<AsignarSitio/>}/>
     
     

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
