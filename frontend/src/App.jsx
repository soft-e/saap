import {Route,Routes} from "react-router-dom";
import PrincipalPage from './pages/PrincipalPage';
import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import PersonalPage from "./pages/PersonalPage";
import AdminPageR from "./pages/AdminPageR";
import NotFound from "./pages/NotFound";
import RegistroParqueo from "./pages/RegistrarParqueo";
import RegistroVehiculo from "./pages/RegistroVehiculo";
import './App.css'

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
        <Route path="/adminr" element={<AdminPageR/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/parqueo" element={<RegistroParqueo/>}/>
        <Route path="/Rvehiculo" element={<RegistroVehiculo/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
